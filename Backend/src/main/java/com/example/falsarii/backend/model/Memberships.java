package com.example.falsarii.backend.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Memberships {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long membershipId;

    private String membershipType;
    private Long amount;
    private LocalDate date;

    public Memberships() {
        this.membershipType = null;
        this.amount = null;
        this.date = null;
    }

    public Memberships(String membershipType, Long amount, LocalDate date) {
        this.membershipType = membershipType;
        this.amount = amount;
        this.date = date;
    }

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private Users user;

    public void setUser(Users user) {
        this.user = user;
    }
    public Users getUser() {
        return user;
    }
    public String getMembershipId() {
        return membershipType;
    }

    public String getMembershipType() {
        return membershipType;
    }
    public void setMembershipType(String membershipType) {
        this.membershipType = membershipType;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public void setAmount(Long amount) {
        this.amount = amount;
    }
    public Long getAmount() {
        return amount;
    }


}