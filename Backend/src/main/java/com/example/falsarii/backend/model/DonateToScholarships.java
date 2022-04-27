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
	private String emailId;
	@Column
	private String name;
	@Column
	private String address;
	@Column
	private String receiptUrl;
	@Column
	private String stripeId;
	
	@Column
	private String date;
	@Column
	private double amount;
	@Column
	private boolean anonymity;
	
	
	public DonateToScholarships() {
		this.user = null;
		this.scholarship = null;
		this.emailId = null;
		this.name = null;
		this.address = null;
		this.receiptUrl = null;
		this.stripeId = null;
		this.date = null;
		this.amount = 0.0;
		this.anonymity = false;
	}

	public DonateToScholarships(Users user, Scholarships scholarship, String emailId, String name, String address,
			String receiptUrl, String stripeId, String date, double amount, boolean anonymity) {
		super();
		this.user = user;
		this.scholarship = scholarship;
		this.emailId = emailId;
		this.name = name;
		this.address = address;
		this.receiptUrl = receiptUrl;
		this.stripeId = stripeId;
		this.date = date;
		this.amount = amount;
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
