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
	@JoinColumn(name = "eventId")
	private Events event;
	
	@Column
	private String date;
	@Column
	private double amount;
	
	public DonateToEvents() {
		this.user = null;
		this.event = null;
		this.date = null;
		this.amount = 0.00;
	}

	public DonateToEvents(Users user, Events event, String date, double amount) {
		this.user = user;
		this.event = event;
		this.date = date;
		this.amount = amount;
	}
	
	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Events getEvent() {
		return event;
	}

	public void setEvent(Events event) {
		this.event = event;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	
}
