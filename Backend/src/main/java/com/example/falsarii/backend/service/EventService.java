package com.example.falsarii.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.example.falsarii.backend.model.EventImages;
import com.example.falsarii.backend.model.Events;
import com.example.falsarii.backend.model.UserImages;
import com.example.falsarii.backend.repository.EventImageRepository;
import com.example.falsarii.backend.repository.EventsRepository;
import com.example.falsarii.backend.repository.UserImageRepository;

@Service
public class EventService {

    //Repository injection
    @Autowired
    private EventsRepository eventRepository;
    @Autowired
	private EventImageRepository eventImageRepository;
	@Autowired
	private AmazonS3 s3Client;
	
	private String bucketName = "devtestnafa";


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
    
    
    public void uploadEventPicture(Long eventId, String fileName,MultipartFile file) {
		try {
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(file.getSize());
			
			s3Client.putObject(bucketName, fileName, file.getInputStream(), metadata);
			
			Events event = eventRepository.findByEventId(eventId);
			
			//check if already exists
			if (eventImageRepository.checkEventPicture(eventId) != null) {
				eventImageRepository.removeEventPicture(eventId);
				
				//Save picture key to database
				EventImages eventImage = new EventImages(fileName);
				eventImage.setEvent(event);
				event.setImage(eventImage);
				eventImageRepository.save(eventImage);
				
			}else {
				//Save picture key to database
				EventImages eventImage = new EventImages(fileName);
				eventImage.setEvent(event);
				event.setImage(eventImage);
				eventImageRepository.save(eventImage);
			}
		
		} catch (Exception e) {
			System.out.println(e.toString() + "Error in uploadEventPicture service");
		}
	}


}