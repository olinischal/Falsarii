package com.example.falsarii.backend.controller;


import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.model.FamilyDetail;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.service.UserService;


@RestController
public class UserController {
	
	//Service injection
	@Autowired
	private UserService userService;
	
	//Create user ***edit with spring web security
	@PostMapping("/user/create")
	public void createUser(@RequestBody Users user) {
		try {
			userService.createUser(user);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	//Get user's groups
	@GetMapping("/user/get-groups")
	public List<Long> getUserGroups(@RequestParam Long userId) {
			return userService.getUserGroups(userId);
	}
		
	//User joins a group
	@PostMapping("/user/join-group")
	public void joinGroup(@RequestParam Long userId, Long groupId) {
		try {
			userService.joinGroup(userId, groupId);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	@PostMapping("/user/remove-group")
	public String removeGroup(@RequestParam Long userId, @RequestParam List<Long> groupIdList) {
		try {
			return userService.removeGroup(userId, groupIdList);
		}catch(Exception e) {
			System.out.println(e.toString());
			return "error";
		}
	}
	
	@PostMapping("/scholarship/donate")
	public void donateToScholarship(@RequestParam Long userId, @RequestParam Long scholarshipId, @RequestParam String date, @RequestParam double amount, @RequestParam boolean anonymity) {
		try {
			userService.donatetoScholarship(userId, scholarshipId, date, amount, anonymity);
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	
	//User donates to events
	@PostMapping("/event/donate")
	public void donateToEvent(@RequestParam Long userId, @RequestParam Long eventId, @RequestParam String date, @RequestParam double amount) {
		try {
			userService.donateToEvent(userId, eventId, date, amount);
		} catch (Exception e) {
			System.out.println(e.toString() + "error in controller");
		}
		
	}
	
	
	//User adds family information test
	@PostMapping("/user/set-family-information")
	public void addInformation(@RequestParam Long userId ,@RequestBody FamilyDetail familyDetail) {
		try {
			userService.addFamilyInfomation(userId, familyDetail);
		} catch (Exception e) {
			System.out.println(e.toString() + "error in temp information in controller");
		}	
	}
	
	
	//Get user family information
	//Use gender to search
	//Test this thing **********************************__________+++++
	//Check sibling mappings
	@GetMapping("/user/get-family-information")
	public Map<String, List> getFamilyInformation(@RequestParam Long userId) {
		try {
			return userService.getFamilyInformation(userId);
			
		} catch (Exception e) {
			System.out.println(e.toString() + "error in get family information");
			return null;
		}
	}
	
	
	
}

