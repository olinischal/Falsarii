package com.example.falsarii.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.model.Scholarships;
import com.example.falsarii.backend.service.ScholarshipService;

@RestController
public class ScholarshipController {
	
	@Autowired
	//Inject service
	private ScholarshipService scholarshipService;
	
	//View all scholarships for admin
	@GetMapping("/scholarship/view")
	public List<Scholarships> getScholarships() {
		return scholarshipService.getScholarships();
	}
		
	//Create scholarship
	@PostMapping("/scholarship/create")
	public void createScholarship(@RequestBody Scholarships scholarship) {
		try {
			scholarshipService.createScholarship(scholarship);
		}catch (Exception e) {
			System.out.println(e.toString() + "scholarship controller error");
		}
	}
	
	//Activate scholarship
	@PostMapping("/scholarship/change-status")
	public void activateScholarship(@RequestParam Long scholarshipId, @RequestParam boolean status) {
		try {
			scholarshipService.changeStatusScholarship(scholarshipId, status);
		}catch(Exception e)
		{
			System.out.println(e.toString() + " scholarship controller activate error");
		}
	}
	
	//Edit scholarship
	@PostMapping("/scholarship/edit")
	public void createScholarship(@RequestParam Long scholarshipId,@RequestBody Scholarships scholarship) {
		try {
			scholarshipService.editScholarship(scholarshipId, scholarship);
		}catch (Exception e) {
			System.out.println(e.toString() + "scholarship controller error");
		}
	}

	
	
}
