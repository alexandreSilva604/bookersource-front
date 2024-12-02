'use client'

import Link from "next/link";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function SignUpPage() {

    const [countries, setCountries] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("none");
    const [countryState, setCountryState] = useState("");

    function loadCountries() {

        fetch("https://restcountries.com/v3.1/all")
        .then(r => {
            return r.json();
        })
        .then(r => {

            let countryArray = [];
            
            r.forEach((country) => {
                countryArray.push(country.name.common);
            });

            countryArray.sort((prevCountryName, nextCountryName) => {

                if (prevCountryName < nextCountryName) {
                    return -1;
                }

                if (prevCountryName > nextCountryName) {
                    return 1;
                }

                return 0;
            });
            setCountries(countryArray);
        })
        .catch(e => {
            console.log(e.message);
        });
    }

    useEffect(() => {
        loadCountries();
    },[])

    return (
        <div>
            <Header title="Sign Up" />

            <div className="container" style={{width: "60em", padding: "2em"}}>
                <form>
                    <div className="row mb-4">
                        <div className="form-group">
                            <label className="fw-bold">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-3">
                            <label className="fw-bold">Birth</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="fw-bold">Country</label>
                            <select className="form-select" onChange={(e) => setSelectedCountry(e.target.value)}>
                                <option value={"none"}>SELECT A COUNTRY</option>
                                {
                                    countries ?
                                    
                                    countries.map((country, index) => {
                                        return <option value={country} key={index}>{country}</option>
                                    })
                                    :
                                    <></>
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label className="fw-bold">State</label>
                            <input className="form-control" disabled={selectedCountry == "none"} 
                            onChange={(e) => setCountryState(e.target.value)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="fw-bold">City</label>
                            <input className="form-control" disabled={countryState == ""} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-8">
                            <label className="fw-bold">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">ZIP Code</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-6">
                            <label className="fw-bold">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Confirm Password</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                </form>
                
                <hr/>
                <Link href="/">
                    <button className="btn btn-danger" 
                    style={{marginTop: 10, marginBottom: 10, marginRight: 20, width: "6em", border: 'none'}}>
                        Cancel
                    </button>
                </Link>
                <button className="btn btn-primary" 
                style={{marginTop: 10, marginBottom: 10, width: "6em", backgroundColor: '#22a', border: 'none'}}>
                    Register
                </button>
            </div>
        </div>
    );
}