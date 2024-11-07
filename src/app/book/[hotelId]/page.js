'use client'

import Header from "@/app/components/header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookHotel() {

    const [hotel, setHotel] = useState(null);
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

        hotels.forEach(hotel => {
            if (hotel.id == params.hotelId) { 
                setHotel(hotel);
            }
        })
    }

    useEffect(() => {
        loadHotel();
    }, []);

    return (

        <div>
        {
            hotel ?
            <section className="py-5">
                <Header title={hotel.name} subtitle={hotel.city} />

                <div className="container card" style={{backgroundColor: '#22b', color: 'white', width: '50em', padding: '2.5em'}}>
                    <div style={{textAlign: 'center', marginBottom: 20}}>
                        <h1>Choose your room</h1>
                        <h4>3 out of 10 vacancies available</h4>
                    </div>
                    <p className="fw-bold" style={{textAlign: 'center'}}>Floor 1</p>
                    <div style={{display: 'flex'}}>
                        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Room" style={{width: '25em'}} />
                        <div style={{marginLeft: 20}}>
                            <h5>Price per day</h5>
                            <h6>$ 50.00</h6>
                            <br/>
                            <h5>Capacity</h5>
                            <h6>2 people</h6>
                            <h6>2 beds</h6>
                        </div>
                    </div>

                    <button type="button" className="btn btn-light" style={{width: 100, marginTop: 20}}>Choose</button>
                </div>
            </section>
            :
            <></>
        }
        </div>
    );
}