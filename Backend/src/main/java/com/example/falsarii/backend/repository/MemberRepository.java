package com.example.falsarii.backend.repository;
import com.example.falsarii.backend.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface MemberRepository extends JpaRepository<Member, Long> {

}
