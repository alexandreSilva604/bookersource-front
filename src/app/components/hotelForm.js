'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";

export default function HotelForm() {

    const { user, setUser } = useContext(UserContext);
    
    const [countries, setCountries] = useState([]);

    const [hotelName, setHotelName] = useState("");
    const [hotelCountry, setHotelCountry] = useState(user.country);
    const [hotelState, setHotelState] = useState(user.state);
    const [hotelCity, setHotelCity] = useState(user.city);
    const [hotelAddress, setHotelAddress] = useState("");

    const [validHotelName, setValidHotelName] = useState("Initial State");
    const [validHotelCountry, setValidHotelCountry] = useState(true);
    const [validHotelState, setValidHotelState] = useState("Initial State");
    const [validHotelCity, setValidHotelCity] = useState("Initial State");
    const [validHotelAddress, setValidHotelAddress] = useState("Initial State");

    function hotelDataIsValid() {

        return validHotelName === true && validHotelCountry === true && validHotelState === true
        && validHotelCity === true && validHotelAddress === true;
    }

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

    function handleHotelNameInput(nameInput) {
        setValidHotelName(nameInput != "");
        setHotelName(nameInput);
    }

    function handleHotelCountryInput(countryInput) {
        setValidHotelCountry(countryInput != "none");
        setHotelCountry(countryInput);
    }

    function handleHotelStateInput(stateInput) {
        setValidHotelState(stateInput != "");
        setHotelState(stateInput);
    }

    function handleHotelCityInput(cityInput) {
        setValidHotelCity(cityInput != "");
        setHotelCity(cityInput);
    }
    
    function handleHotelAddressInput(addressInput) {
        setValidHotelAddress(addressInput.length > 4);
        setHotelAddress(addressInput);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <form>
            <div className="row mb-4">
                <div className="form-group">
                    <label className="fw-bold">Name</label>
                    <input type="text" className={validHotelName == false ? "form-control is-invalid" : "form-control"} 
                    onChange={(e) => handleHotelNameInput(e.target.value)} autoFocus={true} />
                    {
                        validHotelName === false ?
                        <p style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>Please insert a name for the hotel.</p>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group col-md-4">
                    <label className="fw-bold">Country</label>
                    <select className={validHotelCountry == false ? "form-select is-invalid" : "form-select"} 
                    onChange={(e) => handleHotelCountryInput(e.target.value)} value={hotelCountry} >
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
                    {
                        validHotelCountry === false ?
                        <p style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>Please select a country.</p>
                        :
                        <></>
                    }
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">State</label>
                    <input type="text" className={validHotelState == false ? "form-control is-invalid" : "form-control"}  
                    defaultValue={hotelState} 
                    onChange={(e) => handleHotelStateInput(e.target.value)} />
                    {
                        validHotelState === false ?
                        <p style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>Please insert a state for the hotel.</p>
                        :
                        <></>
                    }
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">City</label>
                    <input type="text" className={validHotelCity == false ? "form-control is-invalid" : "form-control"}  
                    defaultValue={hotelCity} onChange={(e) => handleHotelCityInput(e.target.value)} />
                    {
                        validHotelCity === false ?
                        <p style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>Please insert a city for the hotel.</p>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group">
                    <label className="fw-bold">Address</label>
                    <input type="text" className={validHotelAddress == false ? "form-control is-invalid" : "form-control"}  
                    onChange={(e) => handleHotelAddressInput(e.target.value)} />
                    {
                        validHotelAddress === false ?
                        <p style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>Please insert an address of at least 5 characters for the hotel.</p>
                        :
                        <></>
                    }
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