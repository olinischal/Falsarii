package com.example.falsarii.backend.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.example.falsarii.backend.model.Events;
import com.example.falsarii.backend.service.EventService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/member")
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
    public void editEvent(@RequestParam Long eventId,@RequestBody Events event) {
        try {
            eventService.editEvent(eventId, event);
        }catch (Exception e) {
            System.out.println(e.toString() + "event controller error");
        }
    }
    
    //Change event status
  	@PostMapping("/event/change-status")
  	public void activateEvent(@RequestParam Long eventId, @RequestParam boolean status) {
  		try {
  			eventService.changeEventStatus(eventId, status);
  		}catch(Exception e)
  		{
  			System.out.println(e.toString() + " scholarship controller activate error");
  		}
  	}

}