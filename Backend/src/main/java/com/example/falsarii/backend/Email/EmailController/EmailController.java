package com.example.falsarii.backend.Email.EmailController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.Email.EmailDetails.EmailDetails;
import com.example.falsarii.backend.Email.EmailService.EmailService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class EmailController {

	@Autowired
	EmailService emailService;
	
	@PostMapping("/sendEmail")
	public String sendEmail(@RequestBody EmailDetails emailDetails) {
		
		try {
			emailService.setEmailDetails(emailDetails);
			emailService.createTemplate();
			emailService.sendEmail();
		}finally {
			emailService.deleteTemplate();
		}
		
		return "email successfully sent";
	}
	
	@PostMapping("/sendBulkEmail")
	public String sendBulkEmail(@RequestBody EmailDetails emailDetails) {
		try {
			emailService.setEmailDetails(emailDetails);
			emailService.createTemplate();
			emailService.sendBulkEmail();
		}finally {
			emailService.deleteTemplate();
		}
		
		return null;
	}
	
}
