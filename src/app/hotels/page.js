'use client'

import { useEffect, useState } from "react";
import Header from "../components/header";

export default function Hotels() {

    const [searchTerm, setSearchTerm] = useState("");

    const [hotels, setHotels] = useState(null);

    function loadHotels() {

        // Turn this into a fetch in the future
        let hotelsLoaded = [{
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

        hotelsLoaded.sort((a, b) => a.distance - b.distance); // Always start sorted by distance 
        setHotels();
    }

    function handleOrderByChange(criteria) {

        let currentHotels = [];

        hotels.forEach((hotel) => {
            currentHotels.push(hotel)
        });

        if (criteria == "Distance") {
            currentHotels.sort((a, b) => a.distance - b.distance);
            setHotels(currentHotels);
        }

        if (criteria == "Name") {
            currentHotels.sort((a, b) => {
                let prevName = a.name.toLowerCase();
                let nextName = b.name.toLowerCase();
                
                if (prevName < nextName) {
                    return -1;
                }

                if (prevName > nextName) {
                    return 1;
                }

                return 0;
            });

            setHotels(currentHotels);
        }
    }

    useEffect(() => {
        loadHotels();
    }, []);

    return (
        <div>
            <Header title="Hotels" />

            <div className="container" style={{width: 1000}}>
                <b>Search</b>
                <input type="text"
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="form-control" placeholder="Enter a name or city..." style={{marginTop: 10, marginBottom: 10}} />
                <hr/>
                <b>Order By</b>
                <select className="form-select" style={{width: 125, marginTop: 10, marginBottom: 10}} 
                    onChange={(e) => handleOrderByChange(e.target.value)}>
                    <option value="Distance">Distance</option>
                    <option value="Name">Name</option>
                </select>
            </div>
            <section className="py-2">
                <div className="container px-4 px-lg-5 mt-5">
                    
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        hotels
                        ?
                        hotels.map((hotel) => {
                            
                            if (searchTerm == "" || hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                            || hotel.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return (
                                    <div key={hotel.id} className="col mb-5">
                                        <div className="card h-100">
                                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                            <div className="card-body p-4">
                                                <div>
                                                    <h5>{hotel.name}</h5>
                                                    <h6>{hotel.city}</h6>
                                                    <h6>{hotel.address}</h6>    
                                                    <h6>Distance: {hotel.distance} MI</h6>
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-outline-dark mt-auto">Book</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        :
                        <></>
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}