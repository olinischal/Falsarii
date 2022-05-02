package com.example.falsarii.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.falsarii.backend.service.EventService;
import com.example.falsarii.backend.service.S3BucketStorageService;
import com.example.falsarii.backend.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)

@RequestMapping("/member")
@RestController
public class S3BucketController {

	@Autowired
	private S3BucketStorageService s3StorageService;
	
	@Autowired
	private UserService userService;
	@Autowired
	private EventService eventService;
	
	
	@GetMapping("/list/files")
    public List<String> getListOfFiles() {
		return s3StorageService.listFiles();
    }
	
	@PostMapping("/file/uploadProfilePicture")
    public String uploadProfilePicture(@RequestParam Long userId, @RequestParam String fileName,
                                             @RequestParam MultipartFile file) {
		try {
			userService.uploadProfilePicture(userId, fileName, file);
			return "Profile picture uploaded successfully";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}
	
	
	@PostMapping("/file/uploadEventPicture")
    public String uploadEventPicture(@RequestParam Long eventId, @RequestParam String fileName,
                                             @RequestParam MultipartFile file) {
		try {
			eventService.uploadEventPicture(eventId, fileName, file);
			return "Event picture uploaded successfully";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}
	
	
	@PostMapping("/file/upload")
    public String uploadFile(@RequestBody String fileName,
                                             @RequestBody MultipartFile file) {
		try {
			s3StorageService.uploadFile(fileName, file);
			return "File uploaded successfully";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}
}
