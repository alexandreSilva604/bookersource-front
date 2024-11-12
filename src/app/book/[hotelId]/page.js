'use client'

import Header from "@/app/components/header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function BookHotel() {

    const [hotel, setHotel] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [occupiedRooms, setOccupiedRooms] = useState(0);
    const params = useParams();

    function loadHotel() {

        // Turn this into a fetch in the future
        let hotels = [{
                id: 1,
                name: "Beach Hotel",
                city: "Miami, FL",
                address: "Elm Street, 180",
                distance: 0.53,
                image: ""
            },
            {
                id: 2,
                name: "Oasis Hotel",
                city: "Las Vegas, NV",
                address: "Jingle Avenue, 360",
                distance: 200.00,
                image: ""
            },
            {
                id: 3,
                name: "A Very Nice Hotel",
                city: "New York, NY",
                address: "Gill Boulevard, 720",
                distance: 150.00,
                image: ""
            },
        ];

        let i = 0;

        while (i < hotels.length && hotels[i].id != params.hotelId) {
            i++;
        }

        if (i < hotels.length) { 
            setHotel(hotels[i]);
            loadRooms(hotels[i].id);
        }
    }

    function loadRooms(hotelId) {

        // Turn this into a fetch in the future
        switch(hotelId) {

            case 1:
                setRooms([
                {
                    id: 1,
                    number: 1,
                    pricePerDay: 25.99,
                    capacityPeople: 2,
                    numberOfBeds: 2,
                    isOccupied: true
                },
                {
                    id: 2,
                    number: 2,
                    pricePerDay: 50.00,
                    capacityPeople: 4,
                    numberOfBeds: 3,
                    isOccupied: false
                },
                ])
                break;
            
            case 2:
                setRooms([
                {
                    id: 3,
                    number: 1,
                    pricePerDay: 22.99,
                    capacityPeople: 2,
                    numberOfBeds: 2,
                    isOccupied: false
                },
                {
                    id: 4,
                    number: 2,
                    pricePerDay: 75.00,
                    capacityPeople: 4,
                    numberOfBeds: 3,
                    isOccupied: true
                },
            ])
            break;

            case 3:
                setRooms([
                {
                    id: 5,
                    number: 1,
                    pricePerDay: 29.99,
                    capacityPeople: 2,
                    numberOfBeds: 2,
                    isOccupied: false
                },
                {
                    id: 6,
                    number: 2,
                    pricePerDay: 45.00,
                    capacityPeople: 4,
                    numberOfBeds: 3,
                    isOccupied: false
                },
                {
                    id: 7,
                    number: 3,
                    pricePerDay: 30.00,
                    capacityPeople: 3,
                    numberOfBeds: 2,
                    isOccupied: false
                },
            ])
            break;
        }
    }

    useEffect(() => {
        loadHotel();
    }, []);

    return (

        <div>
        {
            hotel && rooms ?
            <section className="py-3">
                <Header title={hotel.name} subtitle={hotel.city} />

                <div className="container card" style={{backgroundColor: '#22b', color: 'white', width: '50em', padding: '2.5em'}}>
                    <div style={{textAlign: 'center', marginBottom: 20}}>
                        <h1>Choose your room</h1>
                    </div>
                    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
                        {
                            rooms.map((room) => {
                                return (
                                    <div key={room.id} style={{paddingLeft: 40, paddingRight: 40}}>
                                        <h4 style={{textAlign: 'center', marginBottom: 40}}>Room {room.number}</h4>
                                        <div style={{display: 'flex'}}>
                                            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Room" style={{width: '25em'}} />
                                            <div style={{marginLeft: 20, textAlign: 'start'}}>
                                                <h5>Price per day</h5>
                                                <h6>$ {parseFloat(room.pricePerDay).toFixed(2)}</h6>
                                                <br/>
                                                <h5>Capacity</h5>
                                                <h6>{room.capacityPeople} people</h6>
                                                <h6>{room.numberOfBeds} beds</h6>
                                            </div>
                                        </div>

                                        {
                                            room.isOccupied ?
                                            <button type="button" className="btn btn-light" style={{width: 100, marginTop: 40}} disabled>Occupied</button>
                                            :
                                            <button type="button" className="btn btn-light" style={{width: 100, marginTop: 40}}>Choose</button>
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    
                </div>
            </section>
            :
            <></>
        }
        </div>
    );
}