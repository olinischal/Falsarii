package com.example.falsarii.backend.model;


import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Emails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eId;

    private LocalDate date;
    private String subject;
    private String text;
    private String recipientIds;

    public Emails() {
        this.date = null;
        this.subject = null;
        this.text = null;
        this.recipientIds = null;
    }

    public Emails(LocalDate date, String subject, String text, String recipientIds) {
        this.date = date;
        this.subject = subject;
        this.text = text;
        this.recipientIds=recipientIds;
    }

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name= "userId", referencedColumnName = "userId")
    private Users user;

    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }

    public String getRecipientIds(){
        return recipientIds;
    }
    public void setRecipient(String recipientIds) {
        this.recipientIds=recipientIds;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Users getUser() {
        return user;
    }



}