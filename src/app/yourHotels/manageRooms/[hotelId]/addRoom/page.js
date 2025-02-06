'use client'

import Header from "@/app/components/header";
import RoomForm from "@/app/components/roomForm";

export default function AddRoom() {

    return (
        <div>
            <Header title="Add Room" />

            <div className="container p-5 mt-5 mb-5">
                <RoomForm />
            </div>
        </div>
    );
}