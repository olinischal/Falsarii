package com.example.falsarii.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class S3BucketController {

	@Autowired
	private com.example.falsarii.backend.service.S3BucketStorageService s3StorageService;
	
	@PostMapping("/file/upload")
    public String uploadFile(@RequestParam String fileName,
                                             @RequestParam MultipartFile file) {
		try {
			s3StorageService.uploadFile(fileName, file);
			return "File uploaded successfully";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}
	
	@GetMapping("/list/files")
    public List<String> getListOfFiles() {
		return s3StorageService.listFiles();
    }
}
