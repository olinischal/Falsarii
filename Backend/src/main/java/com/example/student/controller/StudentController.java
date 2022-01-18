package com.example.student.controller;

import java.util.List;

import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StudentController {
	//with autowired we can directly play with the object without declaring classes and objects 
    @Autowired
    private StudentRepository eRepo;

    //this method retrieves all the students data from database with the help of StudentRepository class
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return eRepo.findAll();
    }
    
    
    @GetMapping("/Students/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return eRepo.findById(id).get();
    }

    @PostMapping("/Students")
    public Student saveStudentDetails(@RequestBody Student Student) {
        return eRepo.save(Student);
    }

    @PutMapping("/Students")
    public Student updateStudent(@RequestBody Student Student) {
        return eRepo.save(Student);
    }

    @DeleteMapping("/Students/{id}")
    public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable Long id) {
        eRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}