import Header from "@/app/components/header";
import HotelForm from "@/app/components/hotelForm";

export default function NewHotel() {

    return (
        <div>
            <Header title="Create New Hotel" />

            <div className="container p-5 mt-5 mb-5">
                <HotelForm />
            </div>
        </div>
    )
}