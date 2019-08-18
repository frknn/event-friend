package com.frknstbs.eventfriendjava.eventfriend.Event;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="event")
@Data
public class Event {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String baslik;
    private int kacKisi;
    private String detay;
    private String etkinlikAdresi;
    private String il;
    private String ilce;
    private String bulusmaYeri;

}
