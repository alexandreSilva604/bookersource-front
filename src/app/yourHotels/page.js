'use client'

import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import UserContext from "../context/userContext";
import Link from "next/link";

export default function YourHotels() {

    const { user, setUser } = useContext(UserContext);
    const [yourHotels, setYourHotels] = useState([]);

    function loadHotels() {

        // CHANGE TO A FETCH LATER
        setYourHotels([{
            id: 1,
            name: "Hotel 1",
            country: "Brazil",
            state: "São Paulo",
            city: "São Paulo",
            adminId: user.id
        }, {
            id: 2,
            name: "Hotel 2",
            country: "United States",
            state: "New York",
            city: "New York",
            adminId: user.id
        }]);
    }

    useEffect(() => {
        loadHotels();
    }, [])

    return (
        <div>
            <Header title="Your Hotels" />

            <div className="container card mt-5 mb-5">
                <div className="card-header p-4">
                    <Link href="/yourHotels/newHotel">
                        <button className="btn btn-primary" style={{backgroundColor: '#22a', border: 'none'}}>
                            New hotel <b>+</b>
                        </button>
                    </Link>
                </div>
                <div className="card-body">
                    {
                        yourHotels.size > 0
                        ?
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    yourHotels.map((hotel) => {
                                        return (
                                            <tr key={hotel.id}>
                                                <th>{hotel.name}</th>
                                                <th>{hotel.city}</th>
                                                <th>{hotel.state}</th>
                                                <th>{hotel.country}</th>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                            <h3>You have no hotels registered (WIP).</h3>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}