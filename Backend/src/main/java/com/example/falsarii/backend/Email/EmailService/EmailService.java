package com.example.falsarii.backend.Email.EmailService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.model.BulkEmailDestination;
import com.amazonaws.services.simpleemail.model.CreateTemplateRequest;
import com.amazonaws.services.simpleemail.model.DeleteTemplateRequest;
import com.amazonaws.services.simpleemail.model.Destination;
import com.amazonaws.services.simpleemail.model.SendBulkTemplatedEmailRequest;
import com.amazonaws.services.simpleemail.model.SendTemplatedEmailRequest;
import com.amazonaws.services.simpleemail.model.Template;
import com.example.falsarii.backend.Email.EmailDetails.EmailDetails;

@Service
public class EmailService {

    @Autowired
    AmazonSimpleEmailService amazonSimpleEmailService;

    private EmailDetails emailDetails;

    private final String templateName = "Template_Name";
    private String subject;
    private String text;
    private List<String> emailList;

    private String templateDefaultData;

    private String from = "khadge933@gmail.com";


    //Create template
    public void createTemplate() {

        this.subject = emailDetails.getSubject();

        this.text = emailDetails.getText();
        this.emailList = emailDetails.getEmailList();
        this.templateDefaultData = "{ \"name\":\"Jack\", \"favoriteanimal\": \"Tiger\"}";

        //Creating template object
        Template template = new Template();
        template.setTemplateName(this.templateName);
        template.setSubjectPart(this.subject);
        template.setTextPart(this.text);
        template.setHtmlPart(null);

        //Creating templateRequest object
        CreateTemplateRequest request = new CreateTemplateRequest();
        request.setTemplate(template);

        //Creating template using request
        amazonSimpleEmailService.createTemplate(request);

    }

    public void sendEmail() {
        try {

            //Destination information
            Destination destination = new Destination();
            destination.setToAddresses(this.emailList);

            SendTemplatedEmailRequest templatedEmailRequest = new SendTemplatedEmailRequest();

            templatedEmailRequest.setTemplate(this.templateName);
            templatedEmailRequest.setDestination(destination);
            templatedEmailRequest.withTemplateData(this.templateDefaultData);
            templatedEmailRequest.setSource(this.from);

            amazonSimpleEmailService.sendTemplatedEmail(templatedEmailRequest);

            //Store email in database

        }catch(Exception e){
            System.out.println("Error occured: " + e.toString());
        }
    }


    public void deleteTemplate() {

        DeleteTemplateRequest deleteTemplateRequest = new DeleteTemplateRequest();

        deleteTemplateRequest.setTemplateName(this.templateName);

        amazonSimpleEmailService.deleteTemplate(deleteTemplateRequest);

        System.out.println("Template deleted succesfully......");
    }


    //Sends bulk email
    public void sendBulkEmail() {

        List<BulkEmailDestination> listBulkEmailDestination =  new ArrayList<BulkEmailDestination>();

        try {

            for(String email: emailList) {

                BulkEmailDestination bulkEmailDestination = new BulkEmailDestination();
                bulkEmailDestination.setDestination(new Destination(Arrays.asList(email)));
                listBulkEmailDestination.add(bulkEmailDestination);

                SendBulkTemplatedEmailRequest sendBulkTemplatedEmailRequest = new SendBulkTemplatedEmailRequest();

                sendBulkTemplatedEmailRequest.setTemplate(this.templateName);
                sendBulkTemplatedEmailRequest.withDefaultTemplateData(this.templateDefaultData);
                sendBulkTemplatedEmailRequest.setDestinations(listBulkEmailDestination);
                sendBulkTemplatedEmailRequest.setSource(this.from);

                amazonSimpleEmailService.sendBulkTemplatedEmail(sendBulkTemplatedEmailRequest);

                //Store email in database
            }



        }catch(Exception e) {
            System.out.println("Error occured: " + e.toString());
        }

    }

    public void setEmailDetails(EmailDetails emailDetails) {
        this.emailDetails = emailDetails;
    }
}