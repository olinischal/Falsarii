package com.example.falsarii.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.Scholarships;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarships, Long>{

	//Find by email id
	public Scholarships findByScholarshipId(Long scholarshipId);
	
	//Change status of scholarship
	@Transactional
	@Modifying
	@Query(
			value = "update scholarships set status = :status where scholarship_id = :scholarshipId",
			nativeQuery = true)
	int setStatus(@Param("scholarshipId") Long scholarshipId ,@Param("status") boolean status);

	
	
}

