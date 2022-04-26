package com.example.falsarii.backend.repository;
import com.example.falsarii.backend.request.model.Member;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface MemberRepository extends JpaRepository<Member, Long> {
	Optional<Member> findByEmail(String email);
	Boolean existsByEmail(String email);
}
