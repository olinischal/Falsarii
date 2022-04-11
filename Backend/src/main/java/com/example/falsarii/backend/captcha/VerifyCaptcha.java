package com.example.falsarii.backend.captcha;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;
//import com.example.falsarii.backend.captcha.ReCaptchaResponse;


@CrossOrigin(origins = "*", maxAge = 3600)
public class VerifyCaptcha {

	@Value("${google.recaptcha.key.secret}")
	private String recaptchaSecret;

	@Value("${recaptcha.url}")
	private String recaptchaServerUrl;

	@Autowired
	private RestTemplate restTemplate;

	public boolean verifyCaptcha(String gRecaptchaResponse) {

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add("secret", "6Ld-YKgeAAAAACU0ULvgjqPRa4UFRF5e8yJITm4n");
		map.add("response", gRecaptchaResponse);

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
//		System.out.println("response: " + request);
		ReCaptchaResponse response = restTemplate.postForObject("https://www.google.com/recaptcha/api/siteverify", map, ReCaptchaResponse.class);
		
//
//		System.out.println("Success: " + response.isSuccess());
//		System.out.println("Hostname: " + response.getHostname());
//		System.out.println("Challenge Timestamp: " + response.getChallange_ts());

		if (response.getErrorCode() != null) {
			for (String error : response.getErrorCode()) {
				System.out.print("\t" + error);
			}
		}
		return response.isSuccess();
	}

}
