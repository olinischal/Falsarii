package com.example.falsarii.backend.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
<<<<<<< HEAD

=======
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	private String emailId;
	private String fname;
	private String middleName;
	private String lname;
	private String maidenName;
	private String password;
	private String phoneNum;
<<<<<<< HEAD
	private String streetAddress;
	private String city;
	private String state;
	private String zipCode;
	private String gender;
	private String highSchool;
	private String university;

	private boolean enabled;
=======
	
	private Boolean enabled;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles", 
          joinColumns = @JoinColumn(name = "user_id"), 
          inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	
	public Users() {
		this.userId = null;
		this.emailId = null;
		this.fname = null;
		this.lname = null;
		this.password = null;
		this.phoneNum = null;
	}
<<<<<<< HEAD

	//Constructor
	public Users(String emailId, String fname, String lname, String password, String phoneNum) {

=======
	
	//Constructor	
	public Users(String emailId, String fname, String lname, String password, String phoneNum) {
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
		this.emailId = emailId;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.phoneNum = phoneNum;
		

	}
<<<<<<< HEAD

	//Relation between user and roles
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "member_roles", 
          joinColumns = @JoinColumn(name = "userId"), 
          inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();
    
    //Returns the set of groups
  	public Set<Role> getRoles(){
  		return roles;
  	}
  	//Sets the set of groups
  	public void setRoles(Set<Role> roles) {
  		this.roles = roles;
  	}

=======
	
	
	
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
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
<<<<<<< HEAD
	)
	private Set<Groups> groups = new HashSet<>();


=======
			)
	private Set<Groups> groups = new HashSet<>();
	
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	//Returns the set of groups
	public Set<Groups> getGroups(){
		return groups;
	}
	//Sets the set of groups
	public void setGroups(Set<Groups> groups) {
		this.groups = groups;
<<<<<<< HEAD
	}



=======
	}	
	
	
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
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
	
	

<<<<<<< HEAD


=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	//Relation between Users and DonateToEvents i.e. One to Many
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private Set<DonateToEvents> donateToEvents = new HashSet<>();
<<<<<<< HEAD


=======
	
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	//Sets the set of donateToEvents
	public Set<DonateToEvents> getDonateToEvents() {
		return donateToEvents;
	}
<<<<<<< HEAD

	//Returns the set of donateToEvents
	public void setDonateToEvents(Set<DonateToEvents> donateToEvents) {
		this.donateToEvents = donateToEvents;
=======
		
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
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
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



	//Relation between user and spouse i.e. self referencing entity
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



	//Relation between user and email i.e. One to many
	@JsonIgnore
	@OneToMany(mappedBy = "user",
			cascade = CascadeType.ALL)
	private Set<Emails> emails = new HashSet<>();

	//Sets the set of emails
	public void setEmail(Set<Emails> emails) {
		this.emails = emails;
	}
	//Returns the set of emails
	public Set<Emails> getEmail() {
		return emails;
	}

	//Relation between user and image i.e. One to one
	@OneToOne(mappedBy = "user",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY)
	private UserImages image;
	
<<<<<<< HEAD
	//Sets the spouse of the user
	public void setImage(UserImages Image) {
		this.image = image;
	}	
	//Returns the spouse of the user
	public UserImages getImage() {
		return image;
	}	


	//Basic setters and getters
	public Long getUserId() {
		return userId;
	}
=======
	
	
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
	
	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	//Basic setters and getters
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
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
	
	public String getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
<<<<<<< HEAD

	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMaidenName() {
		return maidenName;
	}
	public void setMaidenName(String maidenName) {
		this.maidenName = maidenName;
	}
	
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
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
=======
	
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getMaidenName() {
		return maidenName;
	}
	public void setMaidenName(String maidenName) {
		this.maidenName = maidenName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	}

	public Boolean getEnabled() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

<<<<<<< HEAD
	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
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
=======
	


	
	


	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
}