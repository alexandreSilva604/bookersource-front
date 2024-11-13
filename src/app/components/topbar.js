import Link from "next/link";

export default function TopBar() {

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
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item"><Link className="nav-link" href="/login" style={{color: '#22a'}}>Login</Link></li>
                        |
                        <li className="nav-item"><Link className="nav-link" href="/signup" style={{color: '#22a'}}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}