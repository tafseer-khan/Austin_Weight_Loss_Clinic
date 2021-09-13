import React from "react"
import LandingVideo from "../components/LandingVideo"
import CTA from "../components/CTA"
import About from "./About"
import PersistentDrawerRight from "../components/Nav.js"


function Home() {
    return (
        <div id='home'>
            <div id='landingpage'>
                <PersistentDrawerRight/>
                <LandingVideo name="top" />
                <CTA />
            </div>
            <About />
        </div>

    )

}

export default Home;