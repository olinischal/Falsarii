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
import com.example.student.service.StudentService;


@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
<<<<<<< HEAD
    @Autowired
    private StudentService studentService;
=======
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
>>>>>>> 6ee570def7e65a24e63cbfb8c103dbf9ed4c4e3c

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.getAllStudents();
    }
}