'use client'

import Link from "next/link";
import Header from "../components/header";
import { useState } from "react";

export default function LoginPage() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [warning, setWarning] = useState("");

    function login() {

        setWarning("");

        if (loginEmail != "" && loginPassword != "") {

            const dataBody = {
                email: loginEmail,
                password: loginPassword
            }

            fetch("http://localhost:8080/users/authenticate", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(dataBody)
            })
            .then(r => {
                return r.json();
            })
            .then(r => {
    
                if (r.user) {
                    localStorage.setItem("loggedUser", JSON.stringify(r.user));
                    window.location.href = '/';
                }
                else {
                    setWarning("Invalid email or password.");
                }
            })
            .catch(e => {
                setWarning("Error: ", e.message);
            })
        }
        else {
            setWarning("Please enter the required information");
        }
    }

    return (
        <div>
            <Header title="Login" />

            <div className="container" style={{width: "20em", padding: "2em"}}>
                <form>
                    {
                        warning != "" ?
                        <p style={{color: "red", fontWeight: "bold"}}>{warning}</p>
                        :
                        <></>
                    }

                    <div className="form-group">
                        <span className="fw-bold">Email</span>
                        <input type="email" className="form-control" autoFocus={true} 
                        onChange={(e) => setLoginEmail(e.target.value)} />
                    </div>

                    <div className="form-group" style={{marginTop: 40}}>
                        <span className="fw-bold">Password</span>
                        <input type="password" className="form-control" 
                        onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                </form>

                <div style={{fontWeight: "bold"}}>
                    <button type="button" className="btn btn-primary" onClick={login} 
                    style={{marginTop: 40, marginBottom: 10, width: "6em", backgroundColor: '#22a', border: 'none'}}>
                        Login
                    </button>
                    <hr/>
                    <p style={{textAlign: 'center'}}>
                        Don't have an account? 
                        <Link href='/signup' style={{color: "#119", fontWeight: "bolder", textDecoration: "none"}}>
                            &nbsp;Sign up!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}