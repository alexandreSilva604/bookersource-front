'use client'

import Link from "next/link";
import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";

export default function TopBar() {

    let { user, setUser } = useContext(UserContext);

    function signOut() {

        fetch("http://localhost:8080/users/logout", {
            headers: {
                'Content-Type': "application/json"
            },
            method: "GET"
        })
        .then(r => {
            return r.json();
        })
        .then(r => {
            setUser(null);
            localStorage.removeItem("loggedUser");
            window.location.href = '/';
        })
        .catch(e => {
            console.log(e.message);
        })
    }

    return (
        <nav className={"navbar navbar-expand-lg navbar-light"}>
            <div className="container px-4 px-lg-5" >
                <Link className="navbar-brand fw-bold" href="/" style={{color: '#22a'}}>BookerSource</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link" href="/" style={{color: '#22a'}}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/hotels" style={{color: '#22a'}}>Hotels</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/" style={{color: '#22a'}}>About</Link></li>
                    </ul>
                        <div className="d-flex align-items-center">
                            <div>
                                {
                                    user ? 
                                    <Link className="text-decoration-none" href="/profile" style={{color: '#22a'}}>{user.name}</Link> 
                                    :
                                    <Link className="text-decoration-none" href="/login" style={{color: '#22a'}}>Login</Link>
                                }
                            </div>
                            <div style={{cursor: 'default', marginLeft: 10, marginRight: 10}}>|</div>
                            <div>
                                {
                                    user ? 
                                    <span style={{cursor: 'pointer'}} onClick={signOut}>
                                        Sign Out
                                    </span> 
                                    : 
                                    <Link className="text-decoration-none" href="/signup" style={{color: '#22a'}}>Sign In</Link>
                                }
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    );
}