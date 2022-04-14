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
			System.out.println();
			if(scholarshipRepository.findByScholarshipId(scholarship.getScholarshipId()) == null) {
				scholarshipRepository.save(scholarship);
			}else {
				System.out.println("Scholarship is already in database");
			}

		}catch(Exception e) {
			System.out.println(e.toString() + " scholarship save error");
		}
	}

	//Change status of scholarship
	public void changeStatusScholarship(Long scholarshipId, boolean status) {
		try {
			scholarshipRepository.setStatus(scholarshipId, status);
		}catch(Exception e) {
			System.out.println(e.toString() + " scholarship activate error");
		}
	}


	//Edit scholarship details
	public void editScholarship(Long scholarshipId, Scholarships scholarship) {
		try {
			if(scholarshipRepository.findByScholarshipId(scholarshipId) != null) {
				Scholarships scholarshipTemp = scholarshipRepository.findByScholarshipId(scholarshipId);
				scholarshipTemp.setDeadline(scholarship.getDeadline());
				scholarshipTemp.setDescription(scholarship.getDescription());
				scholarshipTemp.setScholarshipName(scholarship.getScholarshipName());
				scholarshipTemp.setStatus(scholarship.isStatus());

				scholarshipRepository.save(scholarshipTemp);
			}
			else {
				System.out.println("Scholarship does not exist");
			}


		} catch (Exception e) {
			System.out.println(e.toString() + " scholarship edit error");
		}
	}



}