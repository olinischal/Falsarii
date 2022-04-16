package com.example.falsarii.backend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DonateToScholarships {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donateToScholarshipId;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "userId")
	private Users user;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "scholarshipId")
	private Scholarships scholarship;
	
	@Column
	private String date;
	@Column
	private double amount;
	@Column
	private boolean anonymity;
	
	public DonateToScholarships() {
		this.user = null;
		this.scholarship = null;
		this.date = null;
		this.amount = 0.0;
		this.anonymity = true;
	}
	
	public DonateToScholarships(Users user, Scholarships scholarship, String date, double d, boolean anonymity) {
		super();
		this.user = user;
		this.scholarship = scholarship;
		this.date = date;
		this.amount = d;
		this.anonymity = anonymity;
	}

//	public Scholarships getScholarship() {
//		return scholarship;
//	}
//
//	public void setScholarship(Scholarships scholarship) {
//		this.scholarship = scholarship;
//	}
	
	

}
