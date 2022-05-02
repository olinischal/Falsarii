package com.example.falsarii.backend.model;

public class UserDetails {
	
	private String middleName;
	private String maidenName;
	private String graduationDate;
	private String address;
	private String gender;
	private String highSchool;
	private String university;
	

	public UserDetails() {
		this.middleName = null;
		this.maidenName = null;
		this.graduationDate = null;
		this.address = null;
		this.gender = null;
	}


	public UserDetails(String middleName, String maidenName, String graduationDate, String address, String gender) {
		this.middleName = middleName;
		this.maidenName = maidenName;
		this.graduationDate = graduationDate;
		this.address = address;
		this.gender = gender;
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


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
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

	
	
}
