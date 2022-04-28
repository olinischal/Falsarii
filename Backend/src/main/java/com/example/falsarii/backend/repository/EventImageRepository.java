package com.example.falsarii.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.EventImages;


@Repository
public interface EventImageRepository extends JpaRepository<EventImages, Long>{
	
	@Query(
			value = "select * from event_images where event_id = :eventId",
			nativeQuery = true)
	EventImages checkEventPicture(@Param("eventId") Long eventId);
	
	@Modifying
	@Transactional
	@Query(
			value = "Delete from event_images where event_id = :eventId",
			nativeQuery = true)
	int removeEventPicture(@Param("eventId") Long eventId);
	
}
