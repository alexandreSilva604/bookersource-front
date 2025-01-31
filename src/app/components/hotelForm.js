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
    const [validHotelState, setValidHotelState] = useState(true);
    const [validHotelCity, setValidHotelCity] = useState(true);
    const [validHotelAddress, setValidHotelAddress] = useState("Initial State");

    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState("");

    function hotelDataIsValid() {

        if (hotelName == "") {
            setValidHotelName(false);
        }

        if (hotelAddress.length <= 4) {
            setValidHotelAddress(false);
        }

        return validHotelName === true && validHotelCountry === true && validHotelState === true
        && validHotelCity === true && validHotelAddress === true;
    }

    function registerHotel() {

        setWarning("");

        if (hotelDataIsValid()) {

            setIsLoading(true);

            const hotelToRegister = {
                id: 0,
                name: hotelName,
                country: hotelCountry,
                state: hotelState,
                city: hotelCity,
                address: hotelAddress,
                adminId: user.id
            };

            fetch("http://localhost:8080/hotels/add", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(hotelToRegister)
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
                if (r.message == "Hotel registered successfully!") {
                    alert(r.message);
                    window.location.href = '/yourHotels';
                }
                else {
                    setWarning(r.message);
                }

                setIsLoading(false);
            })
            .catch(e => {
                setWarning(e.message);
            });
        }
        else {
            setWarning("Please fill the entire form with valid information.");
        }
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
        <div>
            {
                countries.length > 0 ?
                <div>
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
                        {
                            warning != "" ?
                            <p style={{color: "red", fontWeight: "bold"}}>{warning}</p>
                            :
                            <></>
                        }
                        <Link href="/yourHotels">
                            <button className="btn btn-danger" style={{width: 100, height: 40, border: 'none', marginRight: 20}}>
                                Cancel
                            </button>
                        </Link>
                        <button type="button" onClick={registerHotel} 
                        className="btn btn-primary" style={{width: 100, height: 40, backgroundColor: "#22b", border: 'none'}}>
                            Register
                        </button>
                    </form>
                    {
                        isLoading ?
                        <div className="mt-2">
                            <div className="spinner-border" role="status" style={{marginRight: 10}}></div>
                            <span>Registering hotel...</span>
                        </div>
                        :
                        <></>
                    }
                </div>
                :
                <div style={{height: 400}}>
                    <p>Loading...</p>
                </div>
            }
        </div>
    )
}