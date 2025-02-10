'use client'

import Link from "next/link";
import { useState } from "react";

export default function RoomForm() {

    const [roomNumber, setRoomNumber] = useState("");
    const [roomFloor, setRoomFloor] = useState("");
    const [roomPricePerDay, setRoomPricePerDay] = useState("");
    const [roomCapacityPeople, setRoomCapacityPeople] = useState("");
    const [roomNumberBeds, setRoomNumberBeds] = useState("");
    const [roomPhoto, setRoomPhoto] = useState("");

    return (
        <form>
            <div className="row mb-4">
                <div className="col">
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label className="fw-bold" onChange={(e) => setRoomNumber(e.target.value)}>Number</label>
                            <input type="number" className="form-control" autoFocus />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold" onChange={(e) => setRoomFloor(e.target.value)}>Floor</label>
                            <input type="number" className="form-control"/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label className="fw-bold" onChange={(e) => setRoomPricePerDay(e.target.value)}>Price per day</label>
                            <input type="number" className="form-control"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold" onChange={(e) => setRoomCapacityPeople(e.target.value)}>Capacity of people</label>
                            <input type="number" className="form-control"/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label className="fw-bold" onChange={(e) => setRoomNumberBeds(e.target.value)}>Number of beds</label>
                            <input type="number" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="p-5 rounded text-light" style={{backgroundColor: "#22b"}}>
                        <img width={200} height={200} className="rounded" alt="Room Image" src="/img/photo-placeholder.jpg" />
                        <div className="mt-4">
                            <p>Photo file: <b>Empty</b></p>
                            <button className="btn btn-light">Add Photo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <button className="btn btn-primary" style={{backgroundColor: "#22b", border: "none", marginRight: 10}}>
                    Add Room To Hotel
                </button>
                <Link href={`/yourHotels/`}>
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </div>
        </form>
    );
}