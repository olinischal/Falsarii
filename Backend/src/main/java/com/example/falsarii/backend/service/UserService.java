package com.example.falsarii.backend.service;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.hibernate.annotations.NaturalId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.model.DonateToEvents;
import com.example.falsarii.backend.model.DonateToScholarships;
import com.example.falsarii.backend.model.Events;
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
	
	
	//Create user
	public void createUser(Users user) {
		userRepository.save(user);
	}
	
	
	
	//Users add themselves to a group
	public void joinGroup(String emailId, String groupName) {
		try {
			Users user = userRepository.findByEmailId(emailId);
			Groups group = groupRepository.findbyGroupName(groupName);
			user.getGroups().add(group);
			group.getUsers().add(user);
			userRepository.save(user);
		}catch(Exception e) {
			System.out.println(e.toString());
		}	
	}
	
	//Return groups that users are in
	public List<String> getUserGroups(String emailId){
		return userRepository.getUserGroups(emailId);		
	}

	//Remove user from group
	public String removeGroup(String emailId, List<String> groupNameList) {
		try {
			userRepository.removeGroup(emailId, groupNameList);
			return "removed successfully";
		}catch(Exception e) {
			System.out.println(e.toString());
			return "not removed";
		}
	}
	
	//Donate to scholarship
	public void donatetoScholarship(String emailId, String scholarshipName, String date, double amount, boolean anonymity) {
		//Get user and scholarship objects
		Users user = userRepository.findByEmailId(emailId);
		Scholarships scholarship = scholarshipRepository.findByScholarshipName(scholarshipName);
		
		//Save the objects in donate to scholarship
		DonateToScholarships donateToScholarships = new DonateToScholarships(user, scholarship, date, amount, anonymity);
		
		//Add to each other's sets
		user.getDonateToScholarships().add(donateToScholarships);
		scholarship.getDonateToScholarships().add(donateToScholarships);
		
		//Save to the donateToScholarship repository
		donateToScholarshipsRepository.save(donateToScholarships);
		
	}
	
	//Donate to event
	public void donateToEvent(String emailId, String eventName, String date, double amount) {
		Users user = userRepository.findByEmailId(emailId);
		Events event = eventsRepository.findByEventName(eventName);
		
		//Save the objects to donateToEvents
		DonateToEvents donateToEvents = new DonateToEvents(user, event, date, amount);
		
		//Add to each other's sets
		user.getDonateToEvents().add(donateToEvents);
		event.getDonateToEvents().add(donateToEvents);
		
		//Save to the donateToScholarship repository
		donateToEventsRepository.save(donateToEvents);
		
	}
	
//	//Add family information
//	//Check if there is already saved information *************************
//	public void addFamilyInfomation(String emailId, FamilyDetail familyDetail) {
//		try {
//			Users user = userRepository.findByEmailId(emailId);
//			
//			//Adding parents to the parents set
//			for(String parentEmailId: familyDetail.getParentEmailId()) {
//				Users parent = userRepository.findByEmailId(parentEmailId);
//				user.getParents().add(parent);
//			}
//			
//			//Adding children to the children set
//			for(String childEmailId: familyDetail.getChildrenEmailId()) {
//				Users child = userRepository.findByEmailId(childEmailId);
//				user.getChildren().add(child);
//			}
//			
//			//Adding siblings to the siblings set
//			for(String siblingEmailId: familyDetail.getSiblingEmailId()) {
//				Users sibling = userRepository.findByEmailId(siblingEmailId);
//				user.getSiblings().add(sibling);
//			}
//			
//			//Adding spouse of the user
//			Users spouse = userRepository.findByEmailId(familyDetail.getSpouse());
//			user.setSpouse(spouse);
//
//			userRepository.save(user);
//			
//			
//			
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in family detail service");
//		}
//	}
	
	//Add parents of a user
//	public void addParents(String emailId, String parentEmailId) {
//		try {
//			Users user = userRepository.findByEmailId(emailId);
//			Users parent = userRepository.findByEmailId(parentEmailId);
//			
//			//Adding the parents to a set of parents
//			user.getParents().add(parent);
//			
//			//Save the user entity
//			userRepository.save(user);
//
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in add parents in service");
//		}	
//	}
	
	
	//Add children of a user
//	public void addChildren(String emailId, String childEmailId) {
//		try {
//			Users user = userRepository.findByEmailId(emailId);
//			Users child = userRepository.findByEmailId(childEmailId);
//				
//			//Adding the parents to a set of parents
//			user.getChildren().add(child);
//				
//			//Save the user entity
//			userRepository.save(user);
//
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in add child in service");
//		}	
//	}
	
	
	//Add siblings of a user
//	public void addSiblings(String emailId, String siblingEmailId) {
//		try {
//			Users user = userRepository.findByEmailId(emailId);
//			Users sibling = userRepository.findByEmailId(siblingEmailId);
//				
//			//Adding the parents to a set of parents
//			user.getSiblings().add(sibling);
//				
//			//Save the user entity
//			userRepository.save(user);
//
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in add sibling in service");
//		}	
//	}
	
	
	
	//Add spouse of a user
//	public void addSpouse(String emailId, String spouseEmailId) {
//		try {
//			Users user = userRepository.findByEmailId(emailId);
//			Users spouse = userRepository.findByEmailId(spouseEmailId);
//			
//			//Adding spouse of a user
//			user.setSpouse(spouse);
//			
//			//Save the user entity
//			userRepository.save(user);
//			
//		} catch (Exception e) {
//			System.out.println(e.toString() + "error in add spouse in service");
//		}
//	}
	
	
	//Get family information
	//Check if there is already saved information from tables before pulling****************************
	public void getFamilyInformation(String emailId) {
		//Find userid
		Long userId = userRepository.findUserId(emailId);
		//Find parentid
		
		//Check if data is null
		//Search using parentId to get info
		//Check genders
	}
	
	
	
	//Test
	public List<String> test(String emailId) {
		Users user = userRepository.findByEmailId(emailId);
		Set<DonateToScholarships> s = user.getDonateToScholarships();
		System.out.println("Set size: " + s.size());
		List<String> list = new ArrayList<>();
		Iterator itr = s.iterator();
		while(itr.hasNext()) {
			
			list.add(itr.next().toString());
		}
		return list;
	}
	
}
