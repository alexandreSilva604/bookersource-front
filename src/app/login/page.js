import Link from "next/link";
import Header from "../components/header";

export default function LoginPage() {

    return (
        <div>
            <Header title="Login" />

            <div className="container" style={{width: "20em", padding: "2em"}}>
                <form>
                    <div className="form-group">
                        <span className="fw-bold">Email</span>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group" style={{marginTop: 40}}>
                        <span className="fw-bold">Password</span>
                        <input type="password" className="form-control" />
                    </div>
                </form>

                <div style={{fontWeight: "bold"}}>
                    <button className="btn btn-primary" 
                    style={{marginTop: 40, marginBottom: 10, width: "6em", backgroundColor: '#22a', border: 'none'}}>
                        Login
                    </button>
                    <hr/>
                    <p>
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