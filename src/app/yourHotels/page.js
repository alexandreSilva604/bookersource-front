'use client'

import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import UserContext from "../context/userContext";
import Link from "next/link";

export default function YourHotels() {

    const { user, setUser } = useContext(UserContext);
    const [yourHotels, setYourHotels] = useState([]);

    const [loading, setLoading] = useState(true);

    function loadHotels() {

        fetch(`http://localhost:8080/hotels/userHotels/${user.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        .then(r => {
            return r.json();
        })
        .then(r => {
            setYourHotels(r.hotels);
            setLoading(false);
        })
        .catch(e => {
            console.log(e.message);
        });
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
                {
                    loading ?
                    <p>Loading...</p>
                    :
                    <div className="card-body">
                        {
                            yourHotels && yourHotels.length > 0
                            ?
                            <table className="table table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="row">Id</th>
                                        <th scope="row">Name</th>
                                        <th scope="row">City</th>
                                        <th scope="row">State</th>
                                        <th scope="row">Country</th>
                                        <th scope="row">Management</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        yourHotels.map((hotel) => {
                                            return (
                                                <tr key={hotel.id}>
                                                    <th scope="row">{hotel.id}</th>
                                                    <td>{hotel.name}</td>
                                                    <td>{hotel.city}</td>
                                                    <td>{hotel.state}</td>
                                                    <td>{hotel.country}</td>
                                                    <td>
                                                        <Link href={`/manageRooms/${hotel.id}`}>
                                                            <button className="btn btn-primary"
                                                            style={{backgroundColor: '#22a', border: 'none'}}>
                                                                Manage Rooms
                                                            </button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            :
                            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                                <h3>You have no hotels registered.</h3>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}