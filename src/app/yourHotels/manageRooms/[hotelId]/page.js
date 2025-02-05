'use client'

import Header from "@/app/components/header";
import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";
import { use, useEffect, useState } from "react";

export default function ManageRooms({params: hotelId}) {

    const hotelToFind = use(hotelId);

    const [hotel, setHotel] = useState(null);
    const [floors, setFloors] = useState([]);
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
                    <button className="btn btn-primary" style={{backgroundColor: '#22a', border: 'none'}}>
                        Add Floor <b>+</b>
                    </button>
                </div>
                {
                    loading && hotel == null ?
                    <p>Loading...</p>
                    :
                    <div className="card-body">
                        {
                            floors.size > 0
                            ?
                            <table className="table table-hover text-center">
                                
                            </table>
                            :
                            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                                <h3>Add a floor.</h3>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}