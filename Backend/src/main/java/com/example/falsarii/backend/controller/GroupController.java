package com.example.falsarii.backend.controller;


import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import com.example.falsarii.backend.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.web.bind.annotation.*;

import com.example.falsarii.backend.model.Groups;
import com.example.falsarii.backend.service.GroupService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
public class GroupController {

	//Service injection
		@Autowired
		private GroupService groupService;
		
		//Get all groups for admin
		@GetMapping("/groups/show-all")
		public List<Groups> getAllGroups() {
			return groupService.getAllGroups(); 
		}
		
		//Get selected groups for admin
		@GetMapping("/groups/show-selected")
		public List<List<Users>> getSelectedGroups(@RequestParam List<Long> groupIdList) {
			System.out.println(groupIdList);

			//return groupService.getSelectedGroups(groupIdList);
			return null;
		}
		
		//Create group for admin
		@PostMapping("/groups/create")
		public void createGroup(@RequestBody Groups group ) {
			groupService.setGroup(group);
			try {
				groupService.createGroup();
			}catch(Exception e) {
				System.out.println(e.toString());
			}	
		}
		
		//Remove a user from a group
		@PostMapping("/groups/removeUser")
		public void removeUser(@RequestParam Long userId, @RequestParam Long groupId) {
			try {
				groupService.removeUserFromGroup(userId, groupId);
			}catch(Exception e) {
				System.out.println(e.toString());
			}
		}

	@GetMapping("/group/view-all-members")
	public List<Users> getAllMembersOfGroup(String groupName, String year){
		try {
			return groupService.getAllMembersOfGroupByYear(groupName, year);
		}catch(Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}
		
		
		
		
	}