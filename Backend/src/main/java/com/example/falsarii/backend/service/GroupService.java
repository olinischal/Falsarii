package com.example.falsarii.backend.service;


import java.util.ArrayList;
import java.util.List;

import com.example.falsarii.backend.model.Users;
import com.example.falsarii.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.model.Groups;
import com.example.falsarii.backend.repository.GroupRepository;


@Service
public class GroupService {

	//Injecting repository
	@Autowired
	private GroupRepository groupRepository;
	@Autowired
	private UserRepository userRepository;
	private Groups group;

	//Get all groups for admin
	public List<Groups> getAllGroups() {
		return groupRepository.findAll();
	}

	//Set the newly created group
	public void setGroup(Groups group) {
		this.group=group;
	}

	//Create new group
	public void createGroup() {
		groupRepository.save(group);
	}

	//Get selected groups
	public List<List<Users>> getSelectedGroups(List<Long> groupIdList) {

		List<List<Users>> listOfUsers = new ArrayList<>();

		for(Long i: groupIdList){
			List<Users> tempUserList = getAllMembersOfGroup(i);
			listOfUsers.add(tempUserList);
		}

		return listOfUsers;

	}

	//Remove user from group
	public void removeUserFromGroup(Long userId, Long groupId) {
		try {
			groupRepository.removeUserFromGroup(userId, groupId);
		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}

	//Get users of a particular group
	public List<Users> getAllMembersOfGroup(Long groupId){
		try {
			List<Long> userList = groupRepository.getAllMembersOfGroup(groupId);
			System.out.println(userList.size());
			List<Users> temp = new ArrayList<>();

			for(Long i: userList){
				temp.add(userRepository.findByUserId(i));

			}

			return temp;
		} catch (Exception e) {
			System.out.println(e.toString() + "error in get all members of group in group service");
			return null;
		}
	}

}