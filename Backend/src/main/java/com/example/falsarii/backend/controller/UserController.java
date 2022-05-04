package com.example.falsarii.backend.controller;


import java.util.List;
import java.util.Map;

import com.example.falsarii.backend.model.Groups;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.falsarii.backend.model.FamilyDetail;
import com.example.falsarii.backend.model.UserDetails;
import com.example.falsarii.backend.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
public class UserController {
	
	//Service injection
		@Autowired
		private UserService userService;
		
		//Add user details
		@PostMapping("/user/details")
		public void addUserDetails(@RequestParam Long userId, @RequestBody UserDetails userDetail) {
			try {

				userService.addUserDetails(userId, userDetail);
			}catch(Exception e) {
				System.out.println(e.toString() + "Error in add user detail controller");
			}
		}
		
		//Get user's groups
		@GetMapping("/user/get-groups")
		public List<Groups> getUserGroups(@RequestParam Long userId) {
				return userService.getUserGroups(userId);
		}
			
		//User joins a group
		@PostMapping("/user/join-group")
		public void joinGroup( @RequestParam Long userId, @RequestParam Long groupId) {
			try {
				userService.joinGroup(userId, groupId);
			}catch(Exception e) {
				System.out.println(e.toString());
			}
		}
		
		//For user and admin
		@PostMapping("/user/remove-group")
		public String removeGroup(@RequestParam Long userId, @RequestParam Long groupId) {
			try {
				return userService.removeGroup(userId, groupId);
			}catch(Exception e) {
				System.out.println(e.toString());
				return "error";
			}
		}
		
		//For user
		@PostMapping("/scholarship/donate")
		public void donateToScholarship(@RequestParam Long userId, @RequestParam Long scholarshipId, @RequestParam String date, @RequestParam double amount, @RequestParam boolean anonymity) {
			try {
				userService.donatetoScholarship(userId, scholarshipId, date, amount, anonymity);
			}catch(Exception e) {
				System.out.println(e.toString());
			}
		}
		
		//User donates to events
		//For user
		@PostMapping("/event/donate")
		public void donateToEvent(@RequestParam Long userId, @RequestParam Long eventId, @RequestParam String date, @RequestParam double amount) {
			try {
				userService.donateToEvent(userId, eventId, date, amount);
			} catch (Exception e) {
				System.out.println(e.toString() + "error in controller");
			}
			
		}
		
		
		//User adds family information test
		//For user
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
		//Check sibling mappings
		//For user and admin
		@GetMapping("/user/get-family-information")
		public Map<String, List> getFamilyInformation(@RequestParam Long userId) {
			try {
				return userService.getFamilyInformation(userId);
				
			} catch (Exception e) {
				System.out.println(e.toString() + "error in get family information");
				return null;
			}
		}
		
		//For admin
		//Remove family information
		@PostMapping("/edit/family-information")
		public void editFamilyInformation(@RequestParam Long userId, @RequestParam Long familyMemberId, @RequestParam String relationship) {
			try {
				userService.editFamilyInformation(userId, familyMemberId, relationship);			
			} catch (Exception e) {
				System.out.println(e.toString() + "error in edit family information");
			}
		}
		
		//For admin
		//Get list of all donations for a particular event
		@GetMapping("/event/get-all-donations")
		public List<List<String>> getAllDonationForEvent(@RequestParam Long eventId){
			try {
				return userService.getAllDonationForEvent(eventId);
			} catch (Exception e) {
				return null;
			}
		}
		
		//Get list of all donation to all events by a person
		@GetMapping("/event/get-all-donations-by-person")
		public List<List> getAllDonationForEventByPerson(@RequestParam Long userId){
			try {
				return userService.getAllDonationForEventByPerson(userId);
				
			} catch (Exception e) {
				return null;
			}
		}
		
		//For admin
		//Get list of all donations for a particular scholarship
		@GetMapping("/scholarship/get-all-donations")
		public List<List> getAllDonationForScholarship(@RequestParam Long scholarshipId){
			try {
				return userService.getAllDonationForScholarship(scholarshipId);
			} catch (Exception e) {
				return null;
			}
		}
		
		//For admin and user
		//Get list of all donation to all scholarships by a person
		@GetMapping("/scholarship/get-all-donations-by-person")
		public List<List<String>> getAllDonationForScholarshipByPerson(@RequestParam Long userId){
			try {
				return userService.getAllDonationForScholarshipByPerson(userId);
				
			} catch (Exception e) {
				return null;
			}
		}

		
		//For admin
		//Get all emails sent
		@GetMapping("/emails/view")
		public void getAllEmailsHistory() {
			
		}
	@PostMapping("/user/membership")
	public void membership(@RequestParam Long userId, @RequestParam String membershipType) {
		try {
			userService.membership(userId, membershipType);
		} catch (Exception e) {
			System.out.println(e.toString()+"error in user membership controller");
		}
	}
		
	}