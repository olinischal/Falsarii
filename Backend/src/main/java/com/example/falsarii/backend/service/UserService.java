package com.example.falsarii.backend.service;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.model.DonateToScholarships;
import com.example.falsarii.backend.model.Groups;
import com.example.falsarii.backend.model.Scholarships;
import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.DonateToScholarshipsRepository;
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
	private DonateToScholarshipsRepository donateToScholarshipsRepository;
	
	//Create user
	public void createUser(Users user) {
		userRepository.save(user);
	}
	
	
	//Users add themselves to a group
	public void joinGroup(String emailId, String groupName) {
		try {
			Users user = userRepository.findByEmailId(emailId).get();
			Groups group = groupRepository.findbyGroupName(groupName);
			user.getGroups().add(group);
			
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
		Users user = userRepository.findByEmailId(emailId).get();
		Scholarships scholarship = scholarshipRepository.findByScholarshipName(scholarshipName);
		
		//Save the objects in donate to scholarship
		DonateToScholarships donate = new DonateToScholarships(user, scholarship, date, amount, anonymity);
		user.getDonateToScholarships().add(donate);
		scholarship.getDonateToScholarships().add(donate);
		
		//Add to each other's sets
		donateToScholarshipsRepository.save(donate);
		
	}
	
	//Test
	public List<String> test(String emailId) {
		Users user = userRepository.findByEmailId(emailId).get();
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
