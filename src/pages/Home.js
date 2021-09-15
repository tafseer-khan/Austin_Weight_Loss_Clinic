import React from "react"
import LandingVideo from "../components/LandingVideo"
import CTA from "../components/CTA"
import About from "./About"
import PersistentDrawerRight from "../components/Nav.js"
import Treatments from "./Services"
import Locations from "./Locations"
import "../styles/hr.scss"


function Home() {
    return (
        <div id='home'>
            <div id='landingpage'>
                <PersistentDrawerRight/>
                <LandingVideo id="top" />
                <CTA />
            </div>
            <About  />
            <Treatments/>
            <Locations/>
        </div>

    )

}

export default Home;