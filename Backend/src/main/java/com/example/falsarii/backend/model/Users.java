package com.example.falsarii.backend.model;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Users {
	
	//Instance variables	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	private String emailId;
	private String fname;
	private String middleName;
	private String lname;
	private String maidenName;
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
					name = "userId",
					referencedColumnName = "userId"),
			inverseJoinColumns = @JoinColumn(
					name = "groupId",
					referencedColumnName = "groupId")
			)
	private Set<Groups> groups = new HashSet<>();
	
	
	//Returns the set of groups
	public Set<Groups> getGroups(){
		return groups;
	}
	//Sets the set of groups
	public void setGroups(Set<Groups> groups) {
		this.groups = groups;
	}	
	
	
	
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
	
	

	//Relation between Users and DonateToEvents i.e. One to Many
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private Set<DonateToEvents> donateToEvents = new HashSet<>();
	
	
	//Sets the set of donateToEvents
	public Set<DonateToEvents> getDonateToEvents() {
		return donateToEvents;
	}
		
	//Returns the set of donateToEvents
	public void setDonateToEvents(Set<DonateToEvents> donateToEvents) {
		this.donateToEvents = donateToEvents;
	}	
	
	
	
	//Relation between users and parents i.e. self referencing entity
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Users> parents = new HashSet<>();
	
	//Sets the set of parents
	public void setParents(Set<Users> parents) {
		this.parents = parents;
	}
	//Returns the set of parents
	public Set<Users> getParents(){
		return parents;
	}
	
	
	//Relation between users and children i.e. self referencing entity
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Users> children = new HashSet<>();
	
	//Sets the set of children
	public void setChildren(Set<Users> children) {
		this.children = children;
	}	
	//Returns set of children
	public Set<Users> getChildren(){
		return children;
	}
	
	
	
	//Relation between users and siblings i.e. self referencing entity
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Users> siblings = new HashSet<>();
	
	//Sets the set of siblings
	public void setSiblings(Set<Users> siblings) {
		this.siblings = siblings;
	}	
	//Returns set of siblings
	public Set<Users> getSiblings(){
		return siblings;
	}
	
	
	
	//Relation between user and spouse i.e. selft referencing entity
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Users spouse;
	
	//Sets the spouse of the user
	public void setSpouse(Users spouse) {
		this.spouse = spouse;
	}	
	//Returns the spouse of the user
	public Users getSpouse() {
		return spouse;
	}
	
	
	//Basic setters and getters
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