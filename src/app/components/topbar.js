'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";

export default function TopBar() {

    let { user, setUser } = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false);

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
        <div className="d-flex justify-content-between align-items-baseline px-4 px-lg-5" style={{color: '#22a', marginTop: 10}} >
            <div className="d-inline-flex align-items-baseline">
                <Link className="navbar-brand text-decoration-none fw-bold" style={{fontSize: 30}} href="/">BookerSource</Link>
                <div className="d-inline-flex" style={{marginLeft: 50}}>
                    <Link className="nav-link" href="/" style={{marginLeft: 20}}>Home</Link>
                    <Link className="nav-link" href="/hotels" style={{marginLeft: 20}}>Hotels</Link>
                    <Link className="nav-link" href="/" style={{marginLeft: 20}}>About</Link>
                </div>
            </div>
            <div>
                {
                    user ?
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" style={{color: '#22a'}} onClick={() => setShowMenu(!showMenu)}>{user.name}</a>

                                    <div className={showMenu ? "dropdown-menu show" : "dropdown-menu"}>
                                        <a className="dropdown-item" href="/profile">Profile</a>
                                        {
                                            user.administrator ?
                                            <a className="dropdown-item" href="/yourHotels">Your Hotels</a>
                                            :
                                            <></>
                                        }
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#" onClick={signOut}>Sign Out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav> 
                    :
                    <div className="d-inline-flex">
                        <Link className="text-decoration-none" href="/login" style={{color: '#22a'}}>Login</Link>
                        <div style={{marginLeft: 10, marginRight: 10, cursor: 'default'}}>|</div>
                        <Link className="text-decoration-none" href="/signup" style={{color: '#22a'}}>Sign In</Link>
                    </div>
                }
            </div>
        </div>
    );
}