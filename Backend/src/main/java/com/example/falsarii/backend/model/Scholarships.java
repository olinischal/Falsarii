package com.example.falsarii.backend.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Scholarships {



	//Instance variables
	@Id

	private String scholarshipName;
	private String description;
	private String deadline;
	private boolean status;
	
	public Scholarships() {
		this.scholarshipName = "Test Sscholarships";
		this.description = "Test scholarships";
		this.deadline = "Test date";
		this.status = false;
	}
	
	//Constructors
	public Scholarships(String scholarshipName, String description, String deadline, boolean status) {
		
		this.scholarshipName = scholarshipName;
		this.description = description;
		this.deadline = deadline;
		this.status = status;
	} 
	
	@JsonIgnore
	@OneToMany(mappedBy = "scholarship",
			cascade=CascadeType.ALL)
	private Set<DonateToScholarships> donateToScholarships = new HashSet<>();

	//Sets the set of donateToScholarships
	public Set<DonateToScholarships> getDonateToScholarships() {
		return donateToScholarships;
	}

	//Returns the set of donateToScholarships
	public void setDonateToScholarships(Set<DonateToScholarships> donateToScholarships) {
		this.donateToScholarships = donateToScholarships;
	}


	
	public String getScholarshipName() {
		return scholarshipName;
	}

	public void setScholarshipName(String scholarshipName) {
		this.scholarshipName = scholarshipName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
