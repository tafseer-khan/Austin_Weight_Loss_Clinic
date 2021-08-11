import React from "react";
import '../styles/nav.css'

function Navbar() {

    return (
        <div class="topnav">
            <a className={window.location.pathname === "/" ? "active" : "notactive"} href="/">
                <span className="large">Home</span>
                <span className="small">Home</span>
                </a>
            <a className={window.location.pathname === "/about" ? "active" : "notactive"} href="/about">
                <span className="large">About Us</span>
                <span className="small">About</span>
                </a>
            <a className={window.location.pathname === "/services" ? "active" : "notactive"} href="/services">
                <span className="large">Services</span>
                <span className="small">Services</span>
                </a>
            <a className={window.location.pathname === "/appointment" ? "active" : "notactive"} href="/appointment">
                <span className="large">Book Appointment</span>
                <span className="small">Appointment</span>
                </a>
            <a className={window.location.pathname === "/contact" ? "active" : "notactive"} href="/contact">
                <span className="large">Contact and Locations</span>
                <span className="small">Contact</span>
                </a>
        </div>
    )
}
export default Navbar;