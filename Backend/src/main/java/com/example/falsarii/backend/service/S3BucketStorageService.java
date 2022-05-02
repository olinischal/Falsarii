package com.example.falsarii.backend.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ListObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3ObjectSummary;


@Service
public class S3BucketStorageService {

	
	@Autowired
	private AmazonS3 s3Client;
	
	private String bucketName = "devtestnafa";
	
	//Return a List of files in S3
	public List<String> listFiles() {

        ListObjectsRequest listObjectsRequest =
                new ListObjectsRequest()
                        .withBucketName(bucketName);

        List<String> keys = new ArrayList<>();

        ObjectListing objects = s3Client.listObjects(listObjectsRequest);

        while (true) {
            List<S3ObjectSummary> objectSummaries = objects.getObjectSummaries();
            if (objectSummaries.size() < 1) {
                break;
            }

            for (S3ObjectSummary item : objectSummaries) {
                if (!item.getKey().endsWith("/"))
                    keys.add(item.getKey());
            }

            objects = s3Client.listNextBatchOfObjects(objects);
        }

        return keys;
    }



	
	//Upload file
	public String uploadFile(String keyName, MultipartFile file) {
		
		try {
			ObjectMetadata metadata = new ObjectMetadata();
			
			metadata.setContentLength(file.getSize());
			
			s3Client.putObject(bucketName, keyName, file.getInputStream(), metadata);
			
			//Save picture key to database
			
			return "File uploaded: " + keyName;
			
		} catch (Exception e) {
			return null;
		}
	}
	
	
}
