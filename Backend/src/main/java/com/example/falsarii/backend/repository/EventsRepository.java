package com.example.falsarii.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.falsarii.backend.model.Events;

@Repository
public interface EventsRepository extends JpaRepository<Events, Long>{
	
	//Find by email id
	public Events findByEventId(Long eventId);
	
	//Change status of scholarship
	@Transactional
	@Modifying
	@Query(
			value = "update events set status = :status where event_id = :eventId",
			nativeQuery = true)
	int setStatus(@Param("eventId") Long eventId ,@Param("status") boolean status);

}
