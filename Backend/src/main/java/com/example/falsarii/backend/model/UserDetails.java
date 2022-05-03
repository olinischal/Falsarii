package com.example.falsarii.backend.model;

public class UserDetails {
	
	private String middleName;
	private String maidenName;
	private String graduationDate;
	private String streetAddress;
	private String city;
	private String state;
	private String zipCode;
	private String gender;
	private String highSchool;
	private String university;
	private String dateOfBirth;
	

	public UserDetails() {
		this.middleName = null;
		this.maidenName = null;
		this.graduationDate = null;
		this.streetAddress = null;
		this.gender = null;
		this.highSchool = null;
		this.city = null;
		this.zipCode = null;
		this.state = null;
		this.university = null;
		this.dateOfBirth = null;

	}


	public UserDetails(String middleName, String maidenName, String graduationDate, String streetAddress, String gender,
					  String highSchool, String city, String zipCode, String state, String university,
					   String dateOfBirth) {
		this.middleName = middleName;
		this.maidenName = maidenName;
		this.graduationDate = graduationDate;
		this.streetAddress = streetAddress;
		this.gender = gender;
		this.highSchool = highSchool;
		this.city = city;
		this.zipCode = zipCode;
		this.state = state;
		this.university = university;
		this.dateOfBirth = dateOfBirth;
	}


	public String getMiddleName() {
		return middleName;
	}


	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}


	public String getMaidenName() {
		return maidenName;
	}


	public void setMaidenName(String maidenName) {
		this.maidenName = maidenName;
	}


	public String getGraduationDate() {
		return graduationDate;
	}


	public void setGraduationDate(String graduationDate) {
		this.graduationDate = graduationDate;
	}


	public String getStreetAddress() {
		return streetAddress;
	}


	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getHighSchool() {
		return highSchool;
	}


	public void setHighSchool(String highSchool) {
		this.highSchool = highSchool;
	}


	public String getUniversity() {
		return university;
	}


	public void setUniversity(String university) {
		this.university = university;
	}


	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
}
