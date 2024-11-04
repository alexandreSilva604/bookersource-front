import Header from "../components/header";

export default function Hotels() {

    const hotels = [{
        id: 1,
        name: "Beach Hotel",
        city: "Miami, FL",
        address: "Elm Street, 180",
        distance: 0.53,
        image: ""
    },
    {
        id: 2,
        name: "Oasis Hotel",
        city: "Las Vegas, NV",
        address: "Jingle Avenue, 360",
        distance: 200.00,
        image: ""
    },];

    return (
        <div>
            <Header title="Hotels" />

            <div className="container" style={{width: 1000}}>
                <b>Search</b>
                <input type="text" className="form-control" placeholder="Enter a name or location..." style={{marginTop: 10}} />
            </div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        hotels.map((hotel) => {

                            return (
                                    <div key={hotel.id} className="col mb-5">
                                        <div className="card h-100">
                                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                            <div className="card-body p-4">
                                                <div>
                                                    <h5>{hotel.name}</h5>
                                                    <h6>{hotel.city}</h6>
                                                    <h6>{hotel.address}</h6>    
                                                    <h6>Distance: {hotel.distance} MI</h6>
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-outline-dark mt-auto">Book</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}