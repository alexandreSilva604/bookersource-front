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
    const [phoneNumber, setPhoneNumber] = useState("");
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
    const [validPhoneNumber, setValidPhoneNumber] = useState("Initial State");
    const [validEmail, setValidEmail] = useState("Initial State");
    const [validPassword, setValidPassword] = useState("Initial State");
    const [validConfirmPassword, setValidConfirmPassword] = useState("Initial State");

    const [warning, setWarning] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function dataIsValid() {

        return validName == true && validBirth == true && validCountry == true && validState == true && validCity == true &&
            validAddress == true && validPhoneNumber == true && validEmail == true && validPassword == true && 
            validConfirmPassword == true;
    }

    function registerUser() {

        setWarning("");

        if (dataIsValid()) {
            setIsLoading(true);

            const userToRegister = {
                id: 0,
                name: name,
                dateOfBirth: dateOfBirth,
                email: email,
                password: password,
                country: selectedCountry,
                state: countryState,
                city: city,
                address: address,
                phoneNumber: phoneNumber,
                isAdministrator: isAdministrator
            };
    
            fetch("http://localhost:8080/users/add", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(userToRegister)
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
                
                if (parseInt(r.status) == 200) {
                    alert("You have been successfully registered!");
                    window.location.href = '/login';
                }
                else {
                    setWarning("Error Status " + r.status + ": " + r.error);
                }
                
                setIsLoading(false);
            })
            .catch(e => {
                setWarning("Error: " + e.message);
                setIsLoading(false);
            });
        }
        else {
            setWarning("Please fill the form correctly.");
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

    function handleNameInput(nameInput) {

        setValidName(nameInput.length >= 8);    
        setName(nameInput);
    }

    function handleBirthInput(birthInput) {

        let yearEntered = new Date(birthInput).getFullYear();
        let currentYear = new Date().getFullYear();

        let age = currentYear - yearEntered;

        setValidBirth(age >= 18 && age <= 100);
        setDateOfBirth(birthInput);
    }

    function handleCountryInput(countryInput) {

        setValidCountry(countryInput != "none");
        setSelectedCountry(countryInput);
    }

    function handleStateInput(stateInput) {

        setValidState(stateInput.length > 1);
        setCountryState(stateInput);
    }

    function handleCityInput(cityInput) {

        setValidCity(cityInput != "");
        setCity(cityInput);
    }

    function handleAddressInput(addressInput) {

        setValidAddress(addressInput != "");
        setAddress(addressInput);
    }

    function handlePhoneNumberInput(phoneNumberInput) {

        setValidPhoneNumber(phoneNumberInput != "");
        setPhoneNumber(phoneNumberInput);
    }

    function handleEmailInput(emailInput) {

        let emailHasAnAt = false;
        let emailHasADot = false;

        for (let i = 0; i < emailInput.length; i++) {

            if (emailInput[i] == "@") {
                emailHasAnAt = true;
            }

            if (emailHasAnAt && emailInput[i] == "." && i < emailInput.length - 1) {
                emailHasADot = true; 
            }
        }

        setValidEmail(emailHasAnAt && emailHasADot);
        setEmail(emailInput);
    }

    function handlePasswordInput(passwordInput) {

        setValidPassword(passwordInput != "");
        setPassword(passwordInput);
        setValidConfirmPassword(confirmPassword == passwordInput);
    }

    function handleConfirmPasswordInput(confirmPasswordInput) {

        setValidConfirmPassword(confirmPasswordInput != "" && confirmPasswordInput == password);
        setConfirmPassword(confirmPasswordInput);
    }

    useEffect(() => {
        loadCountries();
    },[])

    return (
        <div>
            <Header title="Sign In" />

            <div className="container" style={{width: "60em", padding: "2em"}}>
                <form>
                    <div className="row mb-4">
                        <div className="form-group">
                            <label className="fw-bold">Full Name</label>
                            <input type="text" className={validName == false ? "form-control is-invalid" : "form-control"} 
                            onChange={(e) => handleNameInput(e.target.value)} autoFocus={true} />
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
                                Date of Birth <h6 style={{fontSize: 12, fontWeight: "bold"}}>Minimum age: 18 years</h6>
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
                            <select className={validCountry == false ? "form-select is-invalid" : "form-select"} 
                            onChange={(e) => handleCountryInput(e.target.value)}>
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
                                validCountry == false ?
                                <p style={{color: "red", fontSize: 14}}>Please select a country.</p>
                                :
                                <></>
                            }
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">State</label>
                            <input className={validState == false ? "form-control is-invalid" : "form-control"} 
                                disabled={selectedCountry == "none"}
                                placeholder={selectedCountry == "none" ? "Please select the country" : ""}
                                onChange={(e) => handleStateInput(e.target.value)} />
                            {
                                validState == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a state name.</p>
                                :
                                <></>
                            }
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">City</label>
                            <input className={validCity == false ? "form-control is-invalid" : "form-control"}
                                disabled={countryState == ""}
                                placeholder={countryState == "" ? "Please fill the state" : ""} 
                                onChange={(e) => handleCityInput(e.target.value)} />
                            {
                                validCity == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a city name.</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-md-8">
                            <label className="fw-bold">Address</label>
                            <input type="text" className={validAddress == false ? "form-control is-invalid" : "form-control"} 
                                placeholder="Example: Elm Street, 180"
                                onChange={(e) => handleAddressInput(e.target.value)} />
                            {
                                validAddress == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter your address.</p>
                                :
                                <></>
                            }
                        </div>
                        <div className="form-group col-md-4">
                            <label className="fw-bold">Phone Number</label>
                            <input className={validPhoneNumber == false ? "form-control is-invalid" : "form-control"}
                                onChange={(e) => handlePhoneNumberInput(e.target.value)} maxLength={25} />
                            {
                                validPhoneNumber == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a phone number.</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Email</label>
                            <input type="email" className={validEmail == false ? "form-control is-invalid" : "form-control"}
                                onChange={(e) => handleEmailInput(e.target.value)} />
                            {
                                validEmail == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a valid email.</p>
                                :
                                <></>
                            }
                        </div>
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Password</label>
                            <input type="password" className={validPassword == false ? "form-control is-invalid" : "form-control"}
                                onChange={(e) => handlePasswordInput(e.target.value)} />
                            {
                                validPassword == false ?
                                <p style={{color: "red", fontSize: 14}}>Please enter a password.</p>
                                :
                                <></>
                            }
                        </div>
                        <div className="form-group col-sm-4">
                            <label className="fw-bold">Confirm Password</label>
                            <input type="password" className={validConfirmPassword == false ? "form-control is-invalid" : "form-control"}
                                onChange={(e) => handleConfirmPasswordInput(e.target.value)} />
                            {
                                validConfirmPassword == false ?
                                <p style={{color: "red", fontSize: 14}}>This must match the entered password.</p>
                                :
                                <></>
                            }
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
                {
                    warning != "" ?
                    <p style={{color: "red", fontWeight: "bold"}}>{warning}</p>
                    :
                    <></>
                }
                {
                    isLoading ?
                    <div>
                        <div className="spinner-border" role="status" style={{marginRight: 10}}></div>
                        <span>Processing your data...</span>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );
}