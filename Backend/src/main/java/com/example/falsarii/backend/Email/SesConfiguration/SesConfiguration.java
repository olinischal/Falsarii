package com.example.falsarii.backend.Email.SesConfiguration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;

@Configuration
public class SesConfiguration {

	@Bean
	public AmazonSimpleEmailService amazonSimpleEmailService() {
		
		//Fetching aws credentials using IAM credentials
		BasicAWSCredentials credentials = new BasicAWSCredentials("AKIAQH7VMXGSXM4FGS42", "K19VjBbV0tF6vr/y9IStaadCPSsD2HdL2Po+UrBh");
		
		return AmazonSimpleEmailServiceClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(credentials))
				.withRegion(Regions.US_EAST_2)
				.build();
	}
	
	//Bean for amazon s3 storage
	@Bean
	public AmazonS3 s3client() {

        BasicAWSCredentials awsCredentials = new BasicAWSCredentials("AKIAQH7VMXGSXM4FGS42", "K19VjBbV0tF6vr/y9IStaadCPSsD2HdL2Po+UrBh");
        AmazonS3 amazonS3Client = AmazonS3ClientBuilder.standard()
                .withRegion(Regions.US_EAST_2)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

        return amazonS3Client;
    }

	
}
