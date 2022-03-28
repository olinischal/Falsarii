package com.example.falsarii.backend.controller;


import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PostMapping("/scholarship/donate")
	public void donateToScholarship(@RequestParam String emailId, @RequestParam String scholarshipName, @RequestParam String date, @RequestParam double amount, @RequestParam boolean anonymity) {
		try {
			userService.donatetoScholarship(emailId, scholarshipName, date, amount, anonymity);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	//User donates to events
	@PostMapping("/event/donate")
	public void donateToEvent(@RequestParam String emailId, @RequestParam String eventName, @RequestParam String date, @RequestParam double amount) {
		try {
			userService.donateToEvent(emailId, eventName, date, amount);
		} catch (Exception e) {
			System.out.println(e.toString() + "error in controller");
		}
		
	}
	
	
//	//User adds family information test
//	@PostMapping("user/set-family-information")
//	public void addInformation(@RequestParam String emailId ,@RequestBody FamilyDetail familyDetail) {
//		try {
//			userService.addFamilyInfomation(emailId, familyDetail);
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in temp information in controller");
//		}	
//	}
	
	
	//Get user family information
	//Use gender to search
	@GetMapping("user/get-family-information")
	public void getFamilyInformation(@RequestParam String emailId) {
		try {
			userService.getFamilyInformation(emailId);
		} catch (Exception e) {
			System.out.println(e.toString() + "error in get family information");
		}
	}
	
	
	
	//Tester
	@GetMapping("/tester")
	public List<String> test(@RequestParam String emailId){
		return userService.test(emailId);
	}
	
}

