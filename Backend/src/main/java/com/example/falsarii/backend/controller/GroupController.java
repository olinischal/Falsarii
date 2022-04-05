package com.example.falsarii.backend.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.model.Groups;
import com.example.falsarii.backend.service.GroupService;

@RestController
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
	public List<Groups> getSelectedGroups(@RequestParam List<Long> groupIdList) {
		return groupService.getSelectedGroups(groupIdList);
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
	
	
	
	
}
