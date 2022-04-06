package com.example.falsarii.backend.model;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Groups {
			
		@Id
		private String groupName;
		private String year;
		private int noOfMembers;
		
		@JsonIgnore
		@ManyToMany(mappedBy = "groups", cascade=CascadeType.ALL)
		List<Users> users = new ArrayList<>();
		
		public String getGroupName() {
			return groupName;
		}
		public void setGroupName(String groupName) {
			this.groupName = groupName;
		}
		public String getYear() {
			return year;
		}
		public void setYear(String year) {
			this.year = year;
		}
		public int getNoOfMembers() {
			return noOfMembers;
		}
		public void setNoOfMembers(int noOfMembers) {
			this.noOfMembers = noOfMembers;
		}

}
