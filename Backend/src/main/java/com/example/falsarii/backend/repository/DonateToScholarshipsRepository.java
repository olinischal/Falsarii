package com.example.falsarii.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.DonateToScholarships;

@Repository
public interface DonateToScholarshipsRepository extends JpaRepository<DonateToScholarships, Long> {
	
	//Get list of donations for a particular scholarship
	@Query(
			value = "select user_id, amount, date from donate_to_scholarships where scholarship_id = :scholarshipId",
			nativeQuery = true)
	List<String> getAllDonationForScholarship(@Param("scholarshipId") Long scholarshipId);
	
	//Get all donations to scholarships contributed by a particular person
	@Query(
			value = "select event_id, amount, date from donate_to_scholarships where user_id = :userId",
			nativeQuery = true)
	List<String> getAllDonationForScholarshipByPerson(@Param("userId") Long userId);
	
}
