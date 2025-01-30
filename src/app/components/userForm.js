'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserForm(props) {

    const [countries, setCountries] = useState([]);
    
    const [name, setName] = useState(props.user ? props.user.name : "");
    const [dateOfBirth, setDateOfBirth] = useState(props.user ? props.user.dateOfBirth : "");
    const [selectedCountry, setSelectedCountry] = useState(props.user ? props.user.country : "none");
    const [countryState, setCountryState] = useState(props.user ? props.user.state : "");
    const [city, setCity] = useState(props.user ? props.user.city : "");
    const [address, setAddress] = useState(props.user ? props.user.address : "");
    const [phoneNumber, setPhoneNumber] = useState(props.user ? props.user.phoneNumber : "");
    const [email, setEmail] = useState(props.user ? props.user.email : "");
    const [password, setPassword] = useState(props.user ? props.user.password : "");
    const [confirmPassword, setConfirmPassword] = useState(props.user ? props.user.password : "");
    const [isAdministrator, setIsAdministrator] = useState(props.user ? props.user.administrator : false);

    const [validName, setValidName] = useState(props.user ? true : "Initial State");
    const [validBirth, setValidBirth] = useState(props.user ? true : "Initial State");
    const [validCountry, setValidCountry] = useState(props.user ? true : "Initial State");
    const [validState, setValidState] = useState(props.user ? true : "Initial State");
    const [validCity, setValidCity] = useState(props.user ? true : "Initial State");
    const [validAddress, setValidAddress] = useState(props.user ? true : "Initial State");
    const [validPhoneNumber, setValidPhoneNumber] = useState(props.user ? true : "Initial State");
    const [validEmail, setValidEmail] = useState(props.user ? true : "Initial State");
    const [validPassword, setValidPassword] = useState(props.user ? true : "Initial State");
    const [validConfirmPassword, setValidConfirmPassword] = useState(props.user ? true : "Initial State");

    const [warning, setWarning] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function dataIsValid() {

        return validName == true && validBirth == true && validCountry == true && validState == true && validCity == true &&
            validAddress == true && validPhoneNumber == true && validEmail == true && validPassword == true && 
            validConfirmPassword == true;
    }

    function updateUser() {

        setWarning("");

        if (dataIsValid()) {
            setIsLoading(true);

            const userToUpdate = {
                id: props.user.id,
                name: name,
                dateOfBirth: dateOfBirth,
                email: email,
                password: props.user.password,
                country: selectedCountry,
                state: countryState,
                city: city,
                address: address,
                phoneNumber: phoneNumber,
                isAdministrator: props.user.administrator
            };
    
            fetch("http://localhost:8080/users/update", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(userToUpdate)
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
                
                if (r.user) {
                    localStorage.removeItem("loggedUser");
                    localStorage.setItem("loggedUser", JSON.stringify(r.user));
                    console.log("Saved!");
                    
                    window.location.reload();
                }
                else {
                    setWarning("Error: Couldn't receive user.");
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
        countries.length > 0 ?
        <form>
            <div className="row mb-4">
                <div className="form-group">
                    <label className="fw-bold">Full Name</label>
                    <input type="text" className={validName == false ? "form-control is-invalid" : "form-control"} 
                    onChange={(e) => handleNameInput(e.target.value)} autoFocus={true} 
                    defaultValue={props.user ? props.user.name : ""} />
                    {
                        validName == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a name with at least 8 characters.</p>
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
                    onChange={(e) => handleBirthInput(e.target.value)} 
                    defaultValue={props.user ? props.user.dateOfBirth : ""}/>
                    {
                        validBirth == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Enter a valid date.</p>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group col-md-4">
                    <label className="fw-bold">Country</label>
                    <select className={validCountry == false ? "form-select is-invalid" : "form-select"} 
                    onChange={(e) => handleCountryInput(e.target.value)}
                    defaultValue={selectedCountry} >
                        <option defaultValue={"none"}>SELECT A COUNTRY</option>
                        {
                            countries ?
                            
                            countries.map((country, index) => {
                                return <option defaultValue={country} key={index}>{country}</option>
                            })
                            :
                            <></>
                        }
                    </select>
                    {
                        validCountry == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please select a country.</p>
                        :
                        <></>
                    }
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">State</label>
                    <input className={validState == false ? "form-control is-invalid" : "form-control"} 
                        disabled={selectedCountry == "none"}
                        placeholder={selectedCountry == "none" ? "Please select the country" : ""}
                        onChange={(e) => handleStateInput(e.target.value)} defaultValue={countryState} />
                    {
                        validState == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a state name.</p>
                        :
                        <></>
                    }
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">City</label>
                    <input className={validCity == false ? "form-control is-invalid" : "form-control"}
                        disabled={countryState == ""}
                        placeholder={countryState == "" ? "Please fill the state" : ""} 
                        onChange={(e) => handleCityInput(e.target.value)} defaultValue={city} />
                    {
                        validCity == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a city name.</p>
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
                        onChange={(e) => handleAddressInput(e.target.value)} defaultValue={address} />
                    {
                        validAddress == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter your address.</p>
                        :
                        <></>
                    }
                </div>
                <div className="form-group col-md-4">
                    <label className="fw-bold">Phone Number</label>
                    <input className={validPhoneNumber == false ? "form-control is-invalid" : "form-control"}
                        onChange={(e) => handlePhoneNumberInput(e.target.value)} maxLength={25} defaultValue={phoneNumber} />
                    {
                        validPhoneNumber == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a phone number.</p>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="row mb-4">
                <div className="form-group col-sm-4">
                    <label className="fw-bold">Email</label>
                    <input type="email" className={validEmail == false ? "form-control is-invalid" : "form-control"}
                        onChange={(e) => handleEmailInput(e.target.value)} defaultValue={email} />
                    {
                        validEmail == false ?
                        <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a valid email.</p>
                        :
                        <></>
                    }
                </div>
                {
                    !props.user ?
                    <div className="form-group col-sm-4">
                        <label className="fw-bold">Password</label>
                        <input type="password" className={validPassword == false ? "form-control is-invalid" : "form-control"}
                            onChange={(e) => handlePasswordInput(e.target.value)} />
                        {
                            validPassword == false ?
                            <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>Please enter a password.</p>
                            :
                            <></>
                        }
                    </div>
                    :
                    <></>
                }
                {
                    !props.user ?
                    <div className="form-group col-sm-4">
                        <label className="fw-bold">Confirm Password</label>
                        <input type="password" className={validConfirmPassword == false ? "form-control is-invalid" : "form-control"}
                            onChange={(e) => handleConfirmPasswordInput(e.target.value)} />
                        {
                            validConfirmPassword == false ?
                            <p style={{color: "red", fontSize: 14, fontWeight: 'bold'}}>This must match the entered password.</p>
                            :
                            <></>
                        }
                    </div>
                    :
                    <></>
                }
            </div>
            <hr/>
            <div>
                {
                    props.user ?
                    <button className="btn btn-primary" 
                        style={{width: 100, height: 40, backgroundColor: "#22b", border: 'none'}}
                        onClick={updateUser}>
                            Save
                    </button>
                    :
                    <div>
                        <div className="row mb-2">
                            <div className="form-check col-md-5" style={{marginLeft: "0.75rem"}}>
                                <input type="checkbox" className="form-check-input"
                                    onChange={(e) => setIsAdministrator(e.target.checked)} checked={isAdministrator} />
                                <label className="form-check-label fw-bold">You are a hotel administrator</label>
                            </div>
                        </div>
                        <div>
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
                }
            </div>
            {
                warning != "" ?
                <p style={{color: "red", fontWeight: "bold"}}>{warning}</p>
                :
                <></>
            }
            {
                isLoading ?
                <div className="mt-2">
                    <div className="spinner-border" role="status" style={{marginRight: 10}}></div>
                    <span>Processing your data...</span>
                </div>
                :
                <></>
            }
        </form>
        :
        <div style={{height: 400}}>
            <p>Loading...</p>
        </div>
    )
}