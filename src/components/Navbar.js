import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div class="topnav">
            <a className={window.location.pathname === "/" ? "active" : "notactive"} href="/">Home</a>
            <a className={window.location.pathname === "/about" ? "active" : "notactive"} href="/about">About Us</a>
            <a className={window.location.pathname === "/services" ? "active" : "notactive"} href="/services">Services</a>
            <a className={window.location.pathname === "/appointment" ? "active" : "notactive"} href="/appointment">Book Appointment</a>
            <a className={window.location.pathname === "/contact" ? "active" : "notactive"} href="/contact">Contact and Locations</a>
        </div>
    )
}
export default Navbar;