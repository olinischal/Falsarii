package com.example.falsarii.backend.controller;


import java.io.File;
import java.util.Base64;
import java.util.List;

import com.example.falsarii.backend.model.Upload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.falsarii.backend.service.EventService;
import com.example.falsarii.backend.service.S3BucketStorageService;
import com.example.falsarii.backend.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
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

	@PostMapping(value = "/file/upload1", consumes = MediaType.ALL_VALUE)
	public ResponseEntity uploadFile(@RequestParam MultipartFile file) {
		try {

			s3StorageService.uploadFile("Test picture 1", file);
			return ResponseEntity.ok().build();
		}catch (Exception e){
			System.out.println(e.toString());
			return ResponseEntity.ok().build();
		}

	}

	@PostMapping("/file/upload")
    public String uploadFile(@RequestBody Upload file) {
		try {

			System.out.println(file.getFileCode());
			return "File uploaded successfully";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
			//s3StorageService.
		}
	}
}
