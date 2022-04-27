package com.example.falsarii.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.falsarii.backend.model.Emails;

public interface EmailRepository extends JpaRepository<Emails, Long> {
}