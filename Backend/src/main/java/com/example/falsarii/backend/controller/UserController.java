package com.example.falsarii.backend.controller;


import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.service.UserService;


@RestController
public class UserController {
	
	//Service injection
	@Autowired
	UserService userService;
	
	//Create user ***edit with spring web security
	@PostMapping("/createUser")
	public void createUser(@RequestBody Users user) {
		try {
			userService.createUser(user);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	//Get user's groups
	@GetMapping("/user/getGroups")
	public List<String> getUserGroups(@RequestParam String emailId) {
			return userService.getUserGroups(emailId);
	}
		
	//User joins a group
	@PostMapping("/user/joinGroup")
	public void joinGroup(@RequestParam String emailId, String groupName) {
		try {
			userService.joinGroup(emailId, groupName);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	@PostMapping("/user/removeGroup")
	public String removeGroup(@RequestParam String emailId, @RequestParam List<String> groupNameList) {
		try {
			return userService.removeGroup(emailId, groupNameList);
		}catch(Exception e) {
			System.out.println(e.toString());
			return "error";
		}
	}
	
	@PostMapping("/donateToScholarship")
	public void donateToScholarship(@RequestParam String emailId, @RequestParam String scholarshipName, @RequestParam String date, @RequestParam double amount, @RequestParam boolean anonymity) {
		try {
			userService.donatetoScholarship(emailId, scholarshipName, date, amount, anonymity);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	@GetMapping("/tester")
	public List<String> test(@RequestParam String emailId){
		return userService.test(emailId);
	}
	
}

