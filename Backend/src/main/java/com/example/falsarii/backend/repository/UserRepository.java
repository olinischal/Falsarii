package com.example.falsarii.backend.repository;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.Users;


@Repository
public interface UserRepository extends JpaRepository<Users, String>{
	
	//Find by email id
	public Users findByEmailId(String emailId);
	
	//Find the groups that user is in
	@Query(
			value="Select group_name from group_on where email_id = :emailId",
			nativeQuery = true)
	List<String> getUserGroups(@Param("emailId") String emailId);
	
	//Removes user from a group
	@Modifying
	@Transactional
	@Query(
			value = "Delete from group_on where email_id = :emailId and group_name in :groupList",
			nativeQuery = true)
	int removeGroup(@Param("emailId") String emailId, @Param("groupList") List<String> groupList);
	
	
}
