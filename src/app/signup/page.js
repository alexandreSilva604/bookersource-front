'use client'

import Link from "next/link";
import Header from "../components/header";
import { useEffect, useState } from "react";

export default function SignUpPage() {

    const [countries, setCountries] = useState([]);

    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("none");
    const [countryState, setCountryState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAdministrator, setIsAdministrator] = useState(false);

    const [validName, setValidName] = useState("Initial State");
    const [validBirth, setValidBirth] = useState("Initial State");
    const [validCountry, setValidCountry] = useState("Initial State");
    const [validState, setValidState] = useState("Initial State");
    const [validCity, setValidCity] = useState("Initial State");
    const [validAddress, setValidAddress] = useState("Initial State");
    const [validZipCode, setValidZipCode] = useState("Initial State");
    const [validEmail, setValidEmail] = useState("Initial State");
    const [validPassword, setValidPassword] = useState("Initial State");
    const [validConfirmPassword, setValidConfirmPassword] = useState("Initial State");

    function dataIsValid() {

        return validName == true && validBirth == true && validCountry == true && validState == true && validCity == true &&
            validAddress == true && validZipCode == true && validEmail == true && validPassword == true && 
            validConfirmPassword == true;
    }

    function registerUser() {

        if (dataIsValid()) {

            const userToRegister = {
                name: name,
                dateOfBirth: dateOfBirth,
                country: selectedCountry,
                state: countryState,
                city: city,
                address: address,
                zipCode: zipCode,
                email: email,
                password: password,
                isAdministrator: isAdministrator
            };
    
            fetch("http://localhost:9000/users/add", {
                method: "POST",
                body: JSON.stringify(userToRegister)
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
                alert("You have been successfully registered!");
            })
            .catch(e => {
                alert(e.message);
            });
        }
        else {
            alert("Please fill the entire form.")
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

    function handleNameInput(newName) {

        if (newName.length >= 8) {
            setValidName(true);
        }
        else {
            setValidName(false);
        }

        setName(newName);
    }

    function handleBirthInput(newDate) {

        let yearEntered = new Date(newDate).getFullYear();
        let currentYear = new Date().getFullYear();

        let age = currentYear - yearEntered;

        if (age >= 18 && age <= 100) {
            setValidBirth(true);
        }
        else {
            setValidBirth(false);
        }

        setDateOfBirth(newDate);
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
                            <label className="fw-bold">Full Name</label>
                            <input type="text" className={validName == false ? "form-control is-invalid" : "form-control"} 
                            onChange={(e) => handleNameInput(e.target.value)} />
                            {
                                validName == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a name with at least 8 characters.</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label className="fw-bold">
                                Birth <h6 style={{fontSize: 12, fontWeight: "bold"}}>Minimum age: 18 years</h6>
                            </label>
                            <input type="date" className={validBirth == false ? "form-control is-invalid" : "form-control"} 
                            onChange={(e) => handleBirthInput(e.target.value)} />
                            {
                                validBirth == false ?
                                <p style={{color: "red", fontSize: 14}}>Enter a valid date.</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
                            <label className="fw-bold">State</label>
                            <input className="form-control" disabled={selectedCountry == "none"}
                                placeholder={selectedCountry == "none" ? "Please select the country" : ""}
                                onChange={(e) => setCountryState(e.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">City</label>
                            <input className="form-control" disabled={countryState == ""}
                                placeholder={countryState == "" ? "Please fill the state" : ""} 
                                onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-8">
                            <label className="fw-bold">Address</label>
                            <input type="text" className="form-control" placeholder="Example: Elm Street, 180"
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">ZIP Code</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-6">
                            <label className="fw-bold">Email</label>
                            <input type="email" className="form-control"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Password</label>
                            <input type="password" className="form-control"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Confirm Password</label>
                            <input type="password" className="form-control"
                                onChange={(e) => setConfirmPassword(e.target.checked)} />
                        </div>
                    </div>
                </form>
                
                <hr/>
                <div>
                    <div className="row mb-2">
                        <div className="form-check col-sm-4" style={{marginLeft: "0.75rem"}}>
                            <input type="checkbox" className="form-check-input"
                                onChange={(e) => setIsAdministrator(e.target.checked)} />
                            <label className="form-check-label fw-bold">You are a hotel administrator</label>
                        </div>
                    </div>
                    <Link href="/">
                        <button className="btn btn-danger" 
                        style={{marginTop: 10, marginBottom: 10, marginRight: 20, width: "6em", border: 'none'}}>
                            Cancel
                        </button>
                    </Link>
                    <button type="button" className="btn btn-primary" onClick={registerUser} 
                    style={{marginTop: 10, marginBottom: 10, width: "6em", backgroundColor: '#22a', border: 'none'}}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}