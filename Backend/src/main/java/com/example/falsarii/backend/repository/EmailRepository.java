package com.example.falsarii.backend.repository;

import com.example.falsarii.backend.request.model.Emails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Emails, Long> {
}
