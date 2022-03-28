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
public interface UserRepository extends JpaRepository<Users, Long>{

	
	//Find user_id using emailId
	@Query("select user_id from user where user.emailId=?1")
	Long findUserId(String emailId);
	
	//JPQL query are based on class we have created
	@Query("select u from Users u where u.emailId=?1")
	Users getUserByEmailId(String emailId);
	
	//NativeQuery
	//Uses table name in the database and not of entity 
	@Query(
			value = "SELECT * FROM Users u where u.email_Id = ?1",
			nativeQuery=true
			)
	Users getUserByEmailIdNative(String emailId);
	
	
	//Native Named Param
	@Query(
			value="Select * from Users u where u.email_Id = :emailId",
			nativeQuery=true
			)
	Users getUserByEmailNamedParam(@Param("emailId") String emailId);
	
	
	//Modifying for updating data
	@Modifying
	@Transactional
	@Query(
			value="update Users set fname = ?1 where email_Id = ?2",
			nativeQuery = true)
	int updateTest(String fname, String emailId);
	
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
	
	//Find family information
	//Find parent information
	//Should return a list of parent user ids
	@Query(
			value = "Select parents_user_id from users_parents where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findParentIds(@Param("userId") Long userId);
	
	//Find child information
	@Query(
			value = "Select children_user_id from users_children where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findchildIds(@Param("userId") Long userId);
	
	//Find sibling information
	@Query(
			value = "Select siblings_user_id from users_siblings where users_user_id = :userId",
			nativeQuery = true)
	List<Long> findSiblingIds(@Param("userId") Long userId);
	
	
	//Find spouse information
	@Query(
			value = "Select spouse_user_id from users where user_id = :userId",
			nativeQuery = true)
	Long findSpouseId(@Param("userId") Long userId);
}
