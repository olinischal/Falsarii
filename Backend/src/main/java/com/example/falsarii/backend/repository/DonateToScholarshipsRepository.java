package com.example.falsarii.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.DonateToScholarships;

@Repository
public interface DonateToScholarshipsRepository extends JpaRepository<DonateToScholarships, Long> {
	
}
