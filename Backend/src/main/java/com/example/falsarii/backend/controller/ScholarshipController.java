package com.example.falsarii.backend.controller;


import java.util.List;

import com.example.falsarii.backend.model.Member;
import com.example.falsarii.backend.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.falsarii.backend.model.Scholarships;
import com.example.falsarii.backend.service.ScholarshipService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
public class ScholarshipController {
	
	@Autowired
	//Inject service
	private ScholarshipService scholarshipService;
	
	//View all scholarships for admin
	@GetMapping("/viewScholarships")
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
	@PostMapping("/scholarship/changeStatus")
	public void activateScholarship(@RequestParam String scholarshipName, @RequestParam boolean status) {
		try {
			scholarshipService.changeStatusScholarship(scholarshipName, status);
		}catch(Exception e)
		{
			System.out.println(e.toString() + " scholarship controller activate error");
		}
	}

//
	
	
	
	
}
