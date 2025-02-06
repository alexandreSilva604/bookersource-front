'use client'

import Header from "@/app/components/header";
import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function ManageRooms({params: hotelId}) {

    const hotelToFind = use(hotelId);

    const [hotel, setHotel] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    function loadHotelData() {

        fetch(`http://localhost:8080/hotels/findHotel/${hotelToFind.hotelId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => {
            return r.json();
        })
        .then(r => {
            setHotel(r.hotel);
            setLoading(false);
        })
        .catch(e => {
            console.log(e.message);
        });
    }

    useEffect(() => {
        loadHotelData();
    }, []);

    return (
        <div>
            <Header title="Manage Rooms" subtitle={loading ? "Loading..." : "Hotel: " + hotel.name} />

            <div className="container card mt-5 mb-5">
                <div className="card-header p-4">
                    {
                        loading && hotel == null ?
                        <p>Loading...</p>
                        :
                        <Link href={`/yourHotels/manageRooms/${hotel.id}/addRoom`}>
                            <button className="btn btn-primary" style={{backgroundColor: '#22a', border: 'none'}}>
                                Add Room <b>+</b>
                            </button>
                        </Link>
                    }
                </div>
                {
                    loading && hotel == null ?
                    <p>Loading...</p>
                    :
                    <div className="card-body">
                        {
                            rooms.length > 0
                            ?
                            <table className="table table-hover text-center">
                                
                            </table>
                            :
                            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                                <h3>There are no rooms for this hotel.</h3>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}