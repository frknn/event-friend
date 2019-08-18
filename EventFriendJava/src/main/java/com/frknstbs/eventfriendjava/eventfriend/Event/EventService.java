package com.frknstbs.eventfriendjava.eventfriend.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Executable;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> findAllEvents(){
        return eventRepository.findAll();
    }
    public Event saveEvent(Event event){
        return eventRepository.save(event);
    }
    public Event updateEvent(Event event){
        return eventRepository.save(event);
    }
    public void deleteEvent(Long id){
        eventRepository.deleteById(id);
    }
    public Event findEventById(Long id) {
        final Optional<Event> eventOptional = eventRepository.findById(id);
        if(eventOptional.isPresent()){
            return eventOptional.get();
        }
        return null;
    }
}
