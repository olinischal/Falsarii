package com.example.falsarii.backend.model;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Users {
	
	//Instance variables	
	@Id
	private String emailId;
	private String fname;
	private String lname;
	private String password;
	private String graduationDate;
	private String phoneNum;
	private String address;
	
	public Users() {
		this.emailId = null;
		this.fname = null;
		this.lname = null;
		this.password = null;
		this.graduationDate = null;
		this.phoneNum = null;
		this.address = null;
	}
	
	//Constructor	
	public Users(String emailId, String fname, String lname, String password, String graduationDate, String phoneNum,
			String address) {
		
		this.emailId = emailId;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.graduationDate = graduationDate;
		this.phoneNum = phoneNum;
		this.address = address;
		
	}
	
	//Relation between Users and Groups i.e Many to Many
	@JsonIgnore
	@ManyToMany(
			cascade = CascadeType.ALL)
	@JoinTable(
			name = "Group_On",
			joinColumns = @JoinColumn(
					name = "emailId",
					referencedColumnName = "emailId"),
			inverseJoinColumns = @JoinColumn(
					name = "groupName",
					referencedColumnName = "groupName")
			)
	private Set<Groups> groups = new HashSet<>();
	
	
	//Relation between Users and donate_scholarship i.e One to many
	@JsonIgnore
	@OneToMany(mappedBy = "user",
			cascade = CascadeType.ALL)
	private Set<DonateToScholarships> donateToScholarships = new HashSet<>();
	
	
	//Sets the set of donateToScholarships
	public Set<DonateToScholarships> getDonateToScholarships() {
		return donateToScholarships;
	}
	
	//Returns the set of donateToScholarships
	public void setDonateToScholarships(Set<DonateToScholarships> donateToScholarships) {
		this.donateToScholarships = donateToScholarships;
	}

	//Returns list of groups ***change to set later
	public Set<Groups> getGroups(){
		return groups;
	}

	//Sets the list of groups ***change to set later
	public void setGroups(Set<Groups> groups) {
		this.groups = groups;
	}
	
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGraduationDate() {
		return graduationDate;
	}
	public void setGraduationDate(String graduationDate) {
		this.graduationDate = graduationDate;
	}
	public String getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}