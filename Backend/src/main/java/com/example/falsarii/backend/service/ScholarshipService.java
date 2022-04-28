package com.example.falsarii.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.model.Scholarships;
import com.example.falsarii.backend.repository.ScholarshipRepository;

@Service
public class ScholarshipService {

	@Autowired
	//Inject repository 
	private ScholarshipRepository scholarshipRepository;
	
	//Get all scholarships for admin
	public List<Scholarships> getScholarships() {
		return scholarshipRepository.findAll();
	}
	
	//Create scholarship
	public void createScholarship(Scholarships scholarship) {
		try {
			scholarshipRepository.save(scholarship);
		}catch(Exception e) {
			System.out.println(e.toString() + " scholarship save error");
		}
	}
	
	//Change status of scholarship
	public void changeStatusScholarship(String scholarshipName, boolean status) {
		try {
			scholarshipRepository.setStatus(scholarshipName, status);
			System.out.println(status);
		}catch(Exception e) {

			System.out.println(e.toString() + " scholarship activate error");
		}
	}
		

}
