package com.example.falsarii.backend.Email.EmailDetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class EmailDetails {

    private String subject;
    private String text;

    //List of email
    private List<String> emailList = new ArrayList<String>();

    public String getSubject() {
        return subject;
    }

    public String getText() {
        return text;
    }

    public List<String> getEmailList() {
        return emailList;
    }

}