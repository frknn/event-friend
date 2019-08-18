package com.frknstbs.eventfriendjava.eventfriend.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/event")
    public List<Event> findAll(){
        return eventService.findAllEvents();
    }

    @GetMapping("/event/{id}")
    public Event getEventById(@PathVariable Long id){
        return eventService.findEventById(id);
    }

    @PostMapping("/event")
    public Event addEvent(@RequestBody  Event event){
        return eventService.saveEvent(event);
    }

    @PutMapping("/event")
    public Event updateEvent(@RequestBody Event event) {
        return eventService.updateEvent(event);
    }

    @DeleteMapping("/event/{id}")
    public void deleteEvent(@PathVariable Long id){
        eventService.deleteEvent(id);
    }
}
