'use client'

import Link from "next/link";
import Header from "../components/header";
import { useEffect, useState } from "react";
import UserForm from "../components/userForm";

export default function SignUpPage() {

    return (
        <div>
            <Header title="Sign In" />

            <div className="container" style={{width: "60em", padding: "2em"}}>
                <UserForm />
            </div>
        </div>
    );
}