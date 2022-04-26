package com.example.falsarii.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.request.model.Groups;
import com.example.falsarii.backend.repository.GroupRepository;


@Service
public class GroupService {

	//Injecting repository
	@Autowired
	private GroupRepository groupRepository;
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
	public List<Groups> getSelectedGroups(List<Long> groupIdList) {
		return groupRepository.findAllByGroupId(groupIdList);
	}

	//Remove user from group
	public void removeUserFromGroup(Long userId, Long groupId) {
		try {
			groupRepository.removeUserFromGroup(userId, groupId);
		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}

}