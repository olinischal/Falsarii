package com.example.falsarii.backend.request;

import java.util.Date;
import java.util.Set;

import javax.validation.constraints.*;

public class SignupRequest {

	@NotBlank
	@Size(min = 2, max = 50)
	private String firstName;


	@NotBlank
	@Size(min = 2, max = 50)
	private String lastName;

	@NotBlank
	private String phoneNumber;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(min = 6)
	private String password;
	
	private String captchaResponse;


//	@Size(min = 2, max = 50)
//	private String graduationDate;

	private Set<String> role;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	//public void setGraduationDate(String graduationDate) {
//		this.graduationDate = graduationDate;
//	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<String> getRole() {
		return this.role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}



//	public String getGraduationDate() {
//		return graduationDate;
//	}

	public String getCaptchaResponse() {
		return captchaResponse;
	}

	public void setCaptchaResponse(String captchaResponse) {
		this.captchaResponse = captchaResponse;
	}
}
