import Link from "next/link";

export default function TopBar() {

    return (
        <nav className={"navbar navbar-expand-lg navbar-light"}>
            <div className="container px-4 px-lg-5" >
                <Link className="navbar-brand fw-bold" href="/" style={{color: '#44b'}}>BookerSource</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/" style={{color: '#44b'}}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/" style={{color: '#44b'}}>About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" 
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#44b'}}>Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}