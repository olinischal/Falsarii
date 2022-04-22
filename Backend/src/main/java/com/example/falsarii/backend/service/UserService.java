package com.example.falsarii.backend.service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.hibernate.annotations.NaturalId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.Email.EmailDetails.EmailDetails;
import com.example.falsarii.backend.Email.EmailService.EmailService;
import com.example.falsarii.backend.model.DonateToEvents;
import com.example.falsarii.backend.model.DonateToScholarships;
import com.example.falsarii.backend.model.Events;
import com.example.falsarii.backend.model.FamilyDetail;
import com.example.falsarii.backend.model.Groups;
import com.example.falsarii.backend.model.Scholarships;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.DonateToEventsRepository;
import com.example.falsarii.backend.repository.DonateToScholarshipsRepository;
import com.example.falsarii.backend.repository.EventsRepository;
import com.example.falsarii.backend.repository.GroupRepository;
import com.example.falsarii.backend.repository.ScholarshipRepository;
import com.example.falsarii.backend.repository.UserRepository;

@Service
public class UserService {

	//Repository injection
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private GroupRepository groupRepository;
	@Autowired
	private ScholarshipRepository scholarshipRepository;
	@Autowired
	private EventsRepository eventsRepository;
	@Autowired
	private DonateToScholarshipsRepository donateToScholarshipsRepository;
	@Autowired
	private DonateToEventsRepository donateToEventsRepository;
	@Autowired
	private EmailService emailService;
	
	//Create user
	public void createUser(Users user) {
		userRepository.save(user);
	}
	
	
	
	//Users add themselves to a group
	public void joinGroup(Long userId, Long groupId) {
		try {
			Users user = userRepository.findByUserId(userId);
			Groups group = groupRepository.findByGroupId(groupId);
			user.getGroups().add(group);
			group.getUsers().add(user);
			userRepository.save(user);
		}catch(Exception e) {
			System.out.println(e.toString());
		}	
	}
	
	//Return groups that users are in
	public List<Long> getUserGroups(Long userId){
		return userRepository.getUserGroups(userId);		
	}

	//Remove user from group
	public String removeGroup(Long userId, List<Long> groupIdList) {
		try {
			userRepository.removeGroup(userId, groupIdList);
			return "removed successfully";
		}catch(Exception e) {
			System.out.println(e.toString());
			return "not removed";
		}
	}
	
	//Donate to scholarship
	public void donatetoScholarship(Long userId, Long scholarshipId, String date, double amount, boolean anonymity) {
		//Get user and scholarship objects
		Users user = userRepository.findByUserId(userId);
		Scholarships scholarship = scholarshipRepository.findByScholarshipId(scholarshipId);
		
		//Save the objects in donate to scholarship
		DonateToScholarships donateToScholarships = new DonateToScholarships(user, scholarship, date, amount, anonymity);
		
		//Add to each other's sets
		user.getDonateToScholarships().add(donateToScholarships);
		scholarship.getDonateToScholarships().add(donateToScholarships);
		
		//Save to the donateToScholarship repository
		donateToScholarshipsRepository.save(donateToScholarships);
		
	}
	
	//Donate to event
	public void donateToEvent(Long userId, Long eventId, String date, double amount) {
		Users user = userRepository.findByUserId(userId);
		Events event = eventsRepository.findByEventId(eventId);
		
		//Save the objects to donateToEvents
		DonateToEvents donateToEvents = new DonateToEvents(user, event, date, amount);
		
		//Add to each other's sets
		user.getDonateToEvents().add(donateToEvents);
		event.getDonateToEvents().add(donateToEvents);
		
		//Save to the donateToScholarship repository
		donateToEventsRepository.save(donateToEvents);
		
	}
	
	//Add family information
	//Check if there is already saved information *************************
	public void addFamilyInfomation(Long userId, FamilyDetail familyDetail) {
		try {
			Users user = userRepository.findByUserId(userId);
			//List for emails to be sent
			List<String> tempEmailList = new ArrayList<>();
			
			//Adding parents to the parents set
			for(Long parentEmailId: familyDetail.getParentEmailId()) {
				Users parent = userRepository.findByUserId(parentEmailId);
				user.getParents().add(parent);
				tempEmailList.add(parent.getEmailId());
			}
			
			//Adding children to the children set
			for(Long childEmailId: familyDetail.getChildrenEmailId()) {
				Users child = userRepository.findByUserId(childEmailId);
				user.getChildren().add(child);
				tempEmailList.add(child.getEmailId());
			}
			
			//Adding siblings to the siblings set
			for(Long siblingEmailId: familyDetail.getSiblingEmailId()) {
				Users sibling = userRepository.findByUserId(siblingEmailId);
				user.getSiblings().add(sibling);
				tempEmailList.add(sibling.getEmailId());
			}
			
			//Adding spouse of the user
			Users spouse = userRepository.findByUserId(familyDetail.getSpouse());
			user.setSpouse(spouse);
			tempEmailList.add(spouse.getEmailId());

			userRepository.save(user);
			
			//send email to saved members**************************************
			//Create emailDetail service object
			EmailDetails emailDetails = new EmailDetails();
			emailDetails.setSubject("Nafa notice");
			emailDetails.setText("You were added as a family member by " + user.getEmailId() + ". Contact administrator if the information is incorrect");
			try {
				emailService.setEmailDetails(emailDetails);
				emailService.createTemplate();
				emailService.sendEmail();
			}finally {
				emailService.deleteTemplate();
			}			
		} catch (Exception e) {
			System.out.println(e.toString() + "error in family detail service");
		}
	}
	
	
	
	
	//Get family information
	public Map<String, List> getFamilyInformation(Long userId) {
		
		//Find parent objects using user_ids
		List<Users> parents = userRepository.findAllById(userRepository.findParentIds(userId));
		//Find sibling userIDs
		List<Users> siblings = userRepository.findAllById(userRepository.findSiblingIds(userId));
		//Find children userIds
		List<Users> children = userRepository.findAllById(userRepository.findchildIds(userId));
		//Find spouse userIds
		Optional<Users> spouse = userRepository.findById(userRepository.findSpouseId(userId));
		List spouseList = new ArrayList<>();
		spouseList.add(spouse);
		//Return map of objects
		
		Map<String, List> map = new HashMap<>();
		map.put("parents", parents);
		map.put("siblings", siblings);
		map.put("children", children);
		map.put("spouse", spouseList);
		
		return map;
	}
	
	
	//Removing family member from a user
	public void editFamilyInformation(Long userId, Long familyMemberId, String relationship) {
		if(relationship == "parent") {
			userRepository.removeParent(userId, familyMemberId);
		}else if(relationship == "sibling") {
			userRepository.removeSibling(userId, familyMemberId);
		}else if(relationship == "child") {
			userRepository.removeChild(userId, familyMemberId);
		}else if(relationship == "spouse") {
			userRepository.removeSpouse(userId, familyMemberId);
		}else {
			System.out.println("Error in editfamilyinformation in service");
		}
	}
	
	//For users and admin
	//List of donations made to a all event by a particular person
	public List<List> getAllDonationForEventByPerson(Long userId){
		try {
			List<String> list = donateToEventsRepository.getAllDonationForEventByPerson(userId);
			List<List> donationForEventByPerson = new ArrayList<>();
		
			for(String data: list) {
		
				List<String> tempList = Arrays.asList(data.split(","));
				donationForEventByPerson.add(tempList);
			}	
			
			return donationForEventByPerson;
		} catch (Exception e) {
			return null;
		}
	}
	
	//For admin
	//List of all donations made to a particular event
	public List<List> getAllDonationForEvent(Long eventId) {
		try {	
			List<String> list = donateToEventsRepository.getAllDonationForEvent(eventId);
			List<List> donationForEventData = new ArrayList<>();
			
			for(String data: list) {
				List<String> tempList = Arrays.asList(data.split(","));
				donationForEventData.add(tempList);
			}						
			return donationForEventData;
			
		} catch (Exception e) {
			return null;
			}
	}
	
	//For user and admin
	//List of donations made to a all event by a particular person
	public List<List> getAllDonationForScholarshipByPerson(Long userId){
		try {
			List<String> list = donateToScholarshipsRepository.getAllDonationForScholarshipByPerson(userId);
			List<List> donationForScholarshipByPerson = new ArrayList<>();
		
			for(String data: list) {
				List<String> tempList = Arrays.asList(data.split(","));
				donationForScholarshipByPerson.add(tempList);
			}	
			
			return donationForScholarshipByPerson;
		} catch (Exception e) {
			return null;
		}
	}
	
	
	//For admin
	//List of all donations made to a particular scholarship
	public List<List> getAllDonationForScholarship(Long scholarshipId) {
		try {	
			List<String> list = donateToScholarshipsRepository.getAllDonationForScholarship(scholarshipId);
			List<List> donationForScholarshipData = new ArrayList<>();
			
			for(String data: list) {
				List<String> tempList = Arrays.asList(data.split(","));
				donationForScholarshipData.add(tempList);
			}						
			return donationForScholarshipData;
			
		} catch (Exception e) {
			return null;
			}
	}

	
}
