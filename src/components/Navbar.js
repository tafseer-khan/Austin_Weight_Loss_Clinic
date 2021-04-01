import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div class="ncontent">
            <nav className="navbar navbar-expand-lg navbar-light bg-light cloat-md-center">
                <ul className="navbar-nav center">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            <span class ="full">Home</span><span class ="short">Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                            <span class ="full">About Us</span><span class ="short">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className={window.location.pathname === "/Services" ? "nav-link active" : "nav-link"}>
                        <span class ="full">Our Services</span><span class ="short">Services</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Appointment" className={window.location.pathname === "/Appointment" ? "nav-link active" : "nav-link"}>
                        <span class ="full">Schedule Appointment</span><span class ="short">Appointment</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                        <span class ="full">Contact Us</span><span class ="short">Contact</span>
                        </Link>
                    </li>
                </ul>

            </nav>

        </div>
    )

} export default Navbar;