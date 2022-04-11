
package com.example.falsarii.backend.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.example.falsarii.backend.security.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.example.falsarii.backend.captcha.ReCaptchaResponse;
import com.example.falsarii.backend.captcha.VerifyCaptcha;
import com.example.falsarii.backend.model.ERole;
import com.example.falsarii.backend.model.Member;
import com.example.falsarii.backend.model.Role;
import com.example.falsarii.backend.repository.MemberRepository;
import com.example.falsarii.backend.repository.RoleRepository;
import com.example.falsarii.backend.request.LoginRequest;
import com.example.falsarii.backend.request.SignupRequest;
import com.example.falsarii.backend.security.jwt.JwtUtils;
import com.example.falsarii.backend.security.services.MemberDetailsImpl;
import com.example.falsarii.payload.response.JwtResponse;
import com.example.falsarii.payload.response.MessageResponse;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
public class MemberController {


	@Autowired
	RegistrationService registrationService;
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	MemberRepository memberRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;



	@GetMapping("/getAll")
	public List<Member> list(){
		return memberRepository.findAll();
	}


	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtUtils.generateJwtToken(authentication);

		MemberDetailsImpl userDetails = (MemberDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt,
				userDetails.getId(),
				userDetails.getEmail(),
				roles));
	}


	@PostMapping("/add")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest, HttpServletResponse response) throws Exception{
		VerifyCaptcha verifyResponse = new VerifyCaptcha();


		String gRecaptchaResponse = signUpRequest.getCaptchaResponse();

		if(!verifyReCAPTCHA(gRecaptchaResponse)) {
			return ResponseEntity.ok("Error: Assure that you are human!");
		}
		//registrationService.register(signUpRequest);



		if (memberRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.ok("Error: Email is already taken!");
		}


		// Create new user's account
		Member member = new Member(signUpRequest.getFirstName(),
				signUpRequest.getMaidenName(),
				signUpRequest.getLastName(),

				signUpRequest.getPhoneNumber(),
				signUpRequest.getEmail(),

				encoder.encode(signUpRequest.getPassword())
		);

		try{
			registrationService.register(signUpRequest);

		}catch(Exception e) {

			System.out.print("Failed to register email" );
		}

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)

					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));

			roles.add(userRole);

		} else {
			strRoles.forEach(role -> {
				switch (role) {

					case "admin":
						Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(adminRole);

						break;
					case "mod":
						Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(modRole);

						break;
					default:
						Role userRole = roleRepository.findByName(ERole.ROLE_USER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(userRole);

				}
			});
		}

		member.setRoles(roles);
		memberRepository.save(member);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}


	@GetMapping("getMember/{id}")
	public Member getSingleMember(@PathVariable Long id) {
		return memberRepository.findById(id).get();
	}

	@PutMapping("/update/{id}")
	public ResponseEntity updateMemberDetails(@PathVariable Long id, @RequestBody Member member) {
		Member currentMember = memberRepository.findById(id).orElseThrow(RuntimeException::new);
		currentMember.setFirstName(member.getFirstName());

		currentMember.setMaidenName(member.getMaidenName());
		currentMember.setLastName(member.getLastName());
		currentMember.setPhoneNumber(member.getPhoneNumber());
		currentMember.setEmail(member.getEmail());
		currentMember.setPassword(member.getPassword());
		currentMember.setGraduationDate(member.getGraduationDate());
		currentMember.setAddress(member.getAddress());

		memberRepository.save(currentMember);
		return ResponseEntity.ok(currentMember);
	}

	@GetMapping(path = "registration/confirm")
	public String confirm(@RequestParam("token") String token) {
		return registrationService.confirmToken(token);
	}



	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteMemberEntity(@PathVariable Long id) {
		memberRepository.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}


	private boolean verifyReCAPTCHA(String gRecaptchaResponse) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add("secret", "6Ld-YKgeAAAAACU0ULvgjqPRa4UFRF5e8yJITm4n");
		map.add("response", gRecaptchaResponse);

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map,headers);

		ReCaptchaResponse response = restTemplate.postForObject("https://www.google.com/recaptcha/api/siteverify", map, ReCaptchaResponse.class);

		System.out.println("Success: " + response.isSuccess());
		System.out.println("Hostname: " + response.getHostname());
		System.out.println("Challenge Timestamp: " + response.getChallange_ts());

		if(response.getErrorCode() != null) {
			for(String error : response.getErrorCode()) {
				System.out.print("\t"+error);
			}
		}
		return response.isSuccess();
	}


}
