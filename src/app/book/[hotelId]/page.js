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
            <Header title={"This is the hotel booking page for  " + hotel.name} />
            :
            <></>
        }
        </div>
    );
}