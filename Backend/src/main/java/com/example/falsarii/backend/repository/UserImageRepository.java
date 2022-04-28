package com.example.falsarii.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.UserImages;

@Repository
public interface UserImageRepository extends JpaRepository<UserImages, Long>{
	
	@Query(
			value = "select * from user_images where user_id = :userId",
			nativeQuery = true)
	UserImages checkEventPicture(Long userId);
	
	
	@Modifying
	@Transactional
	@Query(
			value = "Delete from user_images where user_id = :userId",
			nativeQuery = true)
	int removeEventPicture(@Param("userId") Long userId);
}
