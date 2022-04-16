package com.example.falsarii.backend.model;

import java.util.List;


//Contains family information
public class FamilyDetail {

	private List<Long> parentEmailId;
	private List<Long> childrenEmailId;
	private List<Long> siblingEmailId;
	private Long spouseId;
	
	
	public FamilyDetail() {
		this.parentEmailId = null;
		this.childrenEmailId = null;
		this.siblingEmailId = null;
		this.spouseId = null;
	}


	public FamilyDetail(List<Long> parentEmailId, List<Long> childrenEmailId, List<Long> siblingEmailId,
			Long spouseId) {
		super();
		this.parentEmailId = parentEmailId;
		this.childrenEmailId = childrenEmailId;
		this.siblingEmailId = siblingEmailId;
		this.spouseId = spouseId;
	}

	
	//Getters and setters
	public List<Long> getParentEmailId() {
		return parentEmailId;
	}
	public void setParentEmailId(List<Long> parentEmailId) {
		this.parentEmailId = parentEmailId;
	}
	public List<Long> getChildrenEmailId() {
		return childrenEmailId;
	}
	public void setChildrenEmailId(List<Long> childrenEmailId) {
		this.childrenEmailId = childrenEmailId;
	}
	public List<Long> getSiblingEmailId() {
		return siblingEmailId;
	}
	public void setSiblingEmailId(List<Long> siblingEmailId) {
		this.siblingEmailId = siblingEmailId;
	}
	public Long getSpouse() {
		return spouseId;
	}
	public void setSpouse(Long spouseId) {
		this.spouseId = spouseId;
	}
	
	
	
	
	
}