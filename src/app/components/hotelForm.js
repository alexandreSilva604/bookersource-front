'use client'

import Link from "next/link";
import { useContext } from "react";
import UserContext from "../context/userContext";

export default function HotelForm() {

    const { user, setUser } = useContext(UserContext);

    return (
        <form>
            <div className="row mb-4">
                <div className="form-group">
                    <label className="fw-bold">Name</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group col-md-4">
                    <label className="fw-bold">Country</label>
                    <input type="text" className="form-control" defaultValue={user.country + " (WIP, will change to a select)"} disabled />
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">State</label>
                    <input type="text" className="form-control" defaultValue={user.state} />
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">City</label>
                    <input type="text" className="form-control" defaultValue={user.city} />
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group">
                    <label className="fw-bold">Address</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <hr/>
            <Link href="/yourHotels">
                <button className="btn btn-danger" style={{width: 100, height: 40, border: 'none', marginRight: 20}}>
                    Cancel
                </button>
            </Link>
            <button className="btn btn-primary" style={{width: 100, height: 40, backgroundColor: "#22b", border: 'none'}}>
                Register
            </button>
        </form>
    )
}