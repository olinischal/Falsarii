package com.example.falsarii.backend.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.Memberships;
import com.example.falsarii.backend.model.Users;

@Repository
public interface MembershipRepository extends JpaRepository<Memberships, Long>{

	@Query(
			value = "select * from memberships where membership_type = :membershipType",
			nativeQuery = true)
	Memberships findMembershipBy(@Param("membershipType") String membershipType);
	
	
	//Get membershipType by userId
	@Query(
			value = "select membership_type from memberships where user_id = :userId",
			nativeQuery = true)
	String findMembershipType(@Param("userId") Long userId);
	
	
	//Get list of users of particular membershipType
	@Query(
			value = "select user_id from memberships where membership_type = :membershipType",
			nativeQuery = true)
	List<Long> getAllUsersByMembershipType(@Param("membershipType") String membershipType);
	
	
	@Query(
			value = "select user_id, date from memberships",
			nativeQuery = true)
	List<String> getMembershipDate();
	
}
