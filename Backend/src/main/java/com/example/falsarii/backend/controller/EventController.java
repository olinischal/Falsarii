package com.example.falsarii.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.falsarii.backend.model.Events;
import com.example.falsarii.backend.service.EventService;

@RestController
public class EventController {

	//Service injection
	@Autowired
	private EventService eventService;
	
	//View all events
	@GetMapping("/event/view")
	public List<Events> viewAllEvents(){
		return eventService.viewAllEvents();
	}
	
	//Create events
	@PostMapping("/event/create")
	public void createEvent(@RequestBody Events event) {
		try {
			eventService.createEvent(event);
		} catch (Exception e) {
			System.out.println(e.toString() + "error in creating event");
		}
	}
	
	//Edit event
	@PostMapping("/event/edit")
	public void createScholarship(@RequestParam Long eventId,@RequestBody Events event) {
		try {
			eventService.editEvent(eventId, event);
		}catch (Exception e) {
			System.out.println(e.toString() + "event controller error");
		}
	}

	
}
