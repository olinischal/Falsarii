package com.example.falsarii.backend.model;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class UserImages {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long imageId;
	
	private String imageName;
	
	public UserImages() {
		this.imageName = null;
	}

	public UserImages(String imageName) {
		this.imageName = imageName;
	}
	
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "userId", referencedColumnName = "userId")
	private Users user;
	
	public void setUser(Users user) {
		this.user = user;
	}
	public Users getUser() {
		return user;
	}

	public Long getImageId() {
		return imageId;
	}
	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

		
}
