package com.example.falsarii.backend.repository;
import com.example.falsarii.backend.model.Member;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository

public interface MemberRepository extends JpaRepository<Member, Long> {
	Optional<Member> findByEmail(String email);
	Boolean existsByEmail(String email);
	
	@Query("SELECT m FROM Member m WHERE CONCAT(m.firstName, ' ', m.maidenName, ' ', m.lastName, ' ', m.phoneNumber,' ',m.email,' ',m.graduationDate) LIKE %?1%")
	List<Member> searchMember(String keyword);
	
}
