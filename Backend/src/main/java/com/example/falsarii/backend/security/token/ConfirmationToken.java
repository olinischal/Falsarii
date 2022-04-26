package com.example.falsarii.backend.security.token;

import com.example.falsarii.backend.request.model.Users;

import javax.persistence.*;
import java.time.LocalDateTime;

    @Entity
    public class ConfirmationToken {

        @Id
        @GeneratedValue (strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String token;

        @Column(nullable = false)
        private LocalDateTime createdAt;

        @Column(nullable = false)
        private LocalDateTime expiresAt;

        private LocalDateTime confirmedAt;

        @ManyToOne
        @JoinColumn(nullable = false,

                name = "user_id")
        private Users member;

        public ConfirmationToken() {
        }


        public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiresAt, Users member) {

            this.token = token;
            this.createdAt = createdAt;
            this.expiresAt = expiresAt;
            this.member = member;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }

        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }

        public LocalDateTime getExpiresAt() {
            return expiresAt;
        }

        public void setExpiresAt(LocalDateTime expiresAt) {
            this.expiresAt = expiresAt;
        }

        public LocalDateTime getConfirmedAt() {
            return confirmedAt;
        }

        public void setConfirmedAt(LocalDateTime confirmedAt) {
            this.confirmedAt = confirmedAt;
        }


        public Users getMember() {
            return member;
        }

        public void setMember(Users member) {

            this.member = member;
        }
    }


