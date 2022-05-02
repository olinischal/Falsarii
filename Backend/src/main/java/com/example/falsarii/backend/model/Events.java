package com.example.falsarii.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
<<<<<<< HEAD
import javax.persistence.FetchType;
=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
<<<<<<< HEAD
import javax.persistence.OneToOne;
=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Events {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long eventId; 
	
	private String eventName;
	private String description;
	private String date;
	private double entranceFee;
	private boolean status;
	
	
	//Constructors
	public Events() {
		this.eventName = "Dummy name";
		this.description = "Dummy description";
		this.date = "Dummy date";
		this.entranceFee = 0.00;
		this.status = true;
	}
		
	public Events(String eventName, String description, String date, double entranceFee, boolean status) {
		this.eventName = eventName;
		this.description = description;
		this.date = date;
		this.entranceFee = entranceFee;
		this.status = status;
	}
	
	
	//Relation between Users and Groups i.e. One to Many
	@JsonIgnore
	@OneToMany(mappedBy = "event",
			cascade = CascadeType.ALL)
	private Set<DonateToEvents> donateToEvents = new HashSet<>();
	
	//Sets the donateToEvents set
	public void setDonateToEvents(Set<DonateToEvents> donateToEvents) {
		this.donateToEvents = donateToEvents;
	}
	//Returns the set donateToEvents
	public Set<DonateToEvents> getDonateToEvents(){
		return donateToEvents;
	}
	
	
<<<<<<< HEAD
	//Relation between user and image i.e. One to one
	@OneToOne(mappedBy = "event",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY)
	private EventImages image;
	
	//Sets the spouse of the user
	public void setImage(EventImages image) {
			this.image = image;
	}	
	//Returns the spouse of the user
	public EventImages getImage() {
		return image;
	}	

	
=======
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
	//Basic setters and getters
	public String getEventName() {
		return eventName;
	}
	
	public void setEventName(String eventName) {
			this.eventName = eventName;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public double getEntranceFee() {
		return entranceFee;
	}
	public void setEntranceFee(double entranceFee) {
		this.entranceFee = entranceFee;
	}	
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public Long getEventId() {
		return eventId;
	}
	
	
	
}
