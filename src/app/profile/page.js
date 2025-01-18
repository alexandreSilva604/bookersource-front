'use client'

import { useContext } from "react";
import UserContext from "../context/userContext";
import Header from "../components/header";

export default function Profile() {

    const { user, setUser } = useContext(UserContext);

    function convertDate(date) {

        let day = "";
        let month = "";
        let year = "";

        let i = 0;

        while (date[i] != '-') {
            year += date[i];
            i++;
        }

        i++;

        while (date[i] != '-') {
            month += date[i];
            i++;
        }

        i++;

        while (i < date.length) {
            day += date[i];
            i++;
        }

        return `${month}/${day}/${year}`;
    }

    function age(date) {

        let year = "";
        let currentYear = new Date().getFullYear();

        let i = 0;

        while (date[i] != '-') {
            year += date[i];
            i++;
        }

        let age = currentYear - parseInt(year);

        return age;
    }

    return (
        <div>
            <Header title="Your Profile" />

            <section className="py-2">
                <div className="container px-4 px-lg-4 mt-5 py-4 w-50 mb-5">
                    <div className="d-inline-flex justify-content-center align-items-center mb-4">
                        <h2 style={{fontWeight: 'bold'}}>{user.name}</h2>
                        <button className="btn btn-primary" 
                        style={{width: 100, height: 40, marginLeft: 20, backgroundColor: "#22b", border: 'none'}}>
                            Edit
                        </button>
                    </div>
                    <h5><b>Age</b>: {age(user.dateOfBirth)}</h5>
                    <h5><b>Country</b>: {user.country}</h5>
                    <hr />
                    <div>
                        <p><b>Birth date:</b> {convertDate(user.dateOfBirth)}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Address:</b> {user.address}</p>
                        <p><b>City:</b> {user.city}, {user.state}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}