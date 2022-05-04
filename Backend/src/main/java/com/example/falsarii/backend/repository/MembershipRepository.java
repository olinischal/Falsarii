package com.example.falsarii.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.Memberships;
import com.example.falsarii.backend.model.Users;

@Repository
public interface MembershipRepository extends JpaRepository<Memberships, Long>{

    @Query(
            value = "select * from members where membershipType = :membershipType",
            nativeQuery = true)
    Memberships findMembershipBy(@Param("membershipType") String membershipType);
}