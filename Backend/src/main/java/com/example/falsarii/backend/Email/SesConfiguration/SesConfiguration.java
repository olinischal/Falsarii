package com.example.falsarii.backend.Email.SesConfiguration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;

@Configuration
public class SesConfiguration {

//	@Value("${AWS_ACCESS_KEY_ID}")
//	private String accessKey;
//
//	@Value("${AWS_SECRET_ACCESS_KEY}")
//	private String secretKey;
//
//	@Value("${region}")
//	private String region;

    @Bean
    public AmazonSimpleEmailService amazonSimpleEmailService() {

        //Fetching aws credentials using IAM credentials
        BasicAWSCredentials credentials = new BasicAWSCredentials("AKIAQH7VMXGSXM4FGS42", "K19VjBbV0tF6vr/y9IStaadCPSsD2HdL2Po+UrBh");

        return AmazonSimpleEmailServiceClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(Regions.US_EAST_2)
                .build();

    }

}