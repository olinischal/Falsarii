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
	@Query("select userId from Users u where u.emailId=?1")
	Long findUserId(String emailId);
	
	
	//Find user by userId
	@Query(
			value = "select * from users where user_id = :userId",
			nativeQuery = true)
	Users findByUserId(Long userId);
	
	
	//Find the groups that user is in
	@Query(
			value="Select group_id from group_on where user_id = :userId",
			nativeQuery = true)
	List<Long> getUserGroups(@Param("userId") Long userId);
	
	//Removes user from a group
	@Modifying
	@Transactional
	@Query(
			value = "Delete from group_on where user_id = :userId and group_id in :groupIdList",
			nativeQuery = true)
	int removeGroup(@Param("userId") Long userId, @Param("groupList") List<Long> groupIdList);
	
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
