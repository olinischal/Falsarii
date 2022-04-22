package com.example.falsarii.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.falsarii.backend.model.Events;
import com.example.falsarii.backend.repository.EventsRepository;

@Service
public class EventService {
	
	//Repository injection
	@Autowired
	private EventsRepository eventRepository;
	
	
	//View Events
	public List<Events> viewAllEvents(){
		List<Events> events = eventRepository.findAll();
		return events;
	}
	
	
	//Create events
	public void createEvent(Events event) {
		try {
			if(eventRepository.findByEventId(event.getEventId()) == null) {
				eventRepository.save(event);
			}else {
				System.out.println("event already exists");
			}
			
		} catch (Exception e) {
			System.out.println(e.toString() + "error in saving even");
		}
	}
	
	
	//Edit event
	//For admin
	public void editEvent(Long eventId, Events event) {
		try {
			if(eventRepository.findByEventId(eventId) != null) {
				Events eventTemp = eventRepository.findByEventId(eventId);
				eventTemp.setDescription(event.getDescription());
				eventTemp.setDate(event.getDate());
				eventTemp.setEventName(event.getEventName());
				eventTemp.setEntranceFee(event.getEntranceFee());
				eventTemp.setStatus(event.getStatus());
				
				eventRepository.save(eventTemp);
				
			}else {
				System.out.println("Event does not exist");
			}
		}
		catch(Exception e) {
			System.out.println(e.toString() + "error in saving even");
		}
	}
	
	public void changeEventStatus(Long eventId, boolean status) {
		eventRepository.setStatus(eventId, status);
		
	}

}
