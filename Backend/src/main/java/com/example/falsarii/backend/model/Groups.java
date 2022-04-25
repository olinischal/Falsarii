package com.example.falsarii.backend.model;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Groups {
			
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long groupId;
		
		private String groupName;
		private String year;
		private int noOfMembers;
		
		@JsonIgnore
		@ManyToMany(mappedBy = "groups", cascade=CascadeType.ALL)
		Set<Users> users = new HashSet<>();
		
		public Set<Users> getUsers() {
			return users;
		}
		public void setUsers(Set<Users> users) {
			this.users = users;
		}
		
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
