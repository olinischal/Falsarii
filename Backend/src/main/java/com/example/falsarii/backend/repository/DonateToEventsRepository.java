package com.example.falsarii.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.falsarii.backend.model.DonateToEvents;


@Repository
public interface DonateToEventsRepository extends JpaRepository<DonateToEvents, Long>{
	
	//Get list of donations for a particular event
    @Query(
            value = "select user_id, amount, date from donate_to_events where event_id = :eventId",
            nativeQuery = true)
    List<String> getAllDonationForEvent(@Param("eventId") Long eventId);


    //Get all donations to events contributed by a particular person
    @Query(
            value = "select event_id, amount, date from donate_to_events where user_id = :userId",
            nativeQuery = true)
    List<String> getAllDonationForEventByPerson(@Param("userId") Long userId);

}
