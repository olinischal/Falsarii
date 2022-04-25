
package com.example.falsarii.backend.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
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

import com.amazonaws.services.identitymanagement.model.User;
import com.example.falsarii.backend.captcha.ReCaptchaResponse;
import com.example.falsarii.backend.captcha.VerifyCaptcha;
import com.example.falsarii.backend.model.ERole;
import com.example.falsarii.backend.model.Role;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.RoleRepository;
import com.example.falsarii.backend.repository.UserRepository;
import com.example.falsarii.backend.request.LoginRequest;
import com.example.falsarii.backend.request.SignupRequest;
import com.example.falsarii.backend.security.jwt.JwtUtils;
import com.example.falsarii.backend.security.services.MemberDetailsImpl;
import com.example.falsarii.backend.security.services.MemberDetailsServiceImpl;
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
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	MemberDetailsServiceImpl serviceImpl;

	@GetMapping("/getAll")
	public List<Users> list(){
		return userRepository.findAll();
	}
	
	@RequestMapping("/searchMember/{keyword}")
	public List<Users> list( @PathVariable String keyword){
		if(keyword.equals("all")) {
			return userRepository.findAll();
		}
		return userRepository.searchMember(keyword);
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()) );

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtUtils.generateJwtToken(authentication);

		MemberDetailsImpl userDetails = (MemberDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		System.out.println(userDetails.getId());
		return ResponseEntity.ok(new JwtResponse(userDetails.getId(),jwt,
				userDetails.getEmailId(),
				roles));
	}


	@PostMapping("/add")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest, HttpServletResponse response) throws Exception{
		VerifyCaptcha verifyResponse = new VerifyCaptcha();


		String gRecaptchaResponse = signUpRequest.getCaptchaResponse();

		if(!verifyReCAPTCHA(gRecaptchaResponse)) {
			return ResponseEntity.ok("Error: Assure that you are human!");
		}

		
		
		if (userRepository.existsByEmailId(signUpRequest.getEmail())) {
			return ResponseEntity.ok("Error: Email is already taken!");
		}
		
		Users user = new Users(signUpRequest.getEmail(),
				signUpRequest.getFirstName(),
				signUpRequest.getLastName(),
				encoder.encode(signUpRequest.getPassword()),
				signUpRequest.getPhoneNumber()
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

		user.setRoles(roles);
		
		userRepository.save(user);
		

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}



	@GetMapping("/getMember/{id}")
	public Users getSingleMember(@PathVariable Long id) {
		return userRepository.findByUserId(id);

	}

	@PutMapping("/update/{id}")
	public ResponseEntity updateMemberDetails(@PathVariable Long id, @RequestBody Users member) {
		Users currentMember = userRepository.findByUserId(id);
		currentMember.setFname(member.getFname());

		currentMember.setMaidenName(member.getMaidenName());

		currentMember.setLname(member.getLname());
		currentMember.setPhoneNum(member.getPhoneNum());
		currentMember.setEmailId(member.getEmailId());
		currentMember.setPassword(member.getPassword());


		userRepository.save(currentMember);
		return ResponseEntity.ok(currentMember);
	}

	@GetMapping(path = "registration/confirm")
	public String confirm(@RequestParam("token") String token) {
		return registrationService.confirmToken(token);
	}



	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteMemberEntity(@PathVariable Long id) {
		userRepository.deleteById(id);
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
