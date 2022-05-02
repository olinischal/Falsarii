package com.example.falsarii.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DonateToEvents {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donateToEventId;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "userId")
	private Users user;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "eventID")
	private Events event;
	
<<<<<<< HEAD
=======
	
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
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	@Column
	private String date;
	@Column
	private double amount;
	
	public DonateToEvents() {
		this.user = null;
		this.event = null;
<<<<<<< HEAD
		this.date = null;
		this.amount = 0.00;
	}

	public DonateToEvents(Users user, Events event, String date, double amount) {
		this.user = user;
		this.event = event;
=======
		this.emailId = null;
		this.name = null;
		this.address = null;
		this.receiptUrl = null;
		this.stripeId = null;
		this.date = null;
		this.amount = 0.0;
	}
	
	public DonateToEvents(Users user, Events event, String emailId, String name, String address, String receiptUrl,
			String stripeId, String date, double amount) {
		this.user = user;
		this.event = event;
		this.emailId = emailId;
		this.name = name;
		this.address = address;
		this.receiptUrl = receiptUrl;
		this.stripeId = stripeId;
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
		this.date = date;
		this.amount = amount;
	}
	
	
	
<<<<<<< HEAD
=======
	
	
	
	
	
	
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
}
