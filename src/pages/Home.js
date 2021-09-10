import React from "react"
import LandingVideo from "../components/LandingVideo"
import CTA from "../components/CTA"
import Info from "../components/Info"
import PersistentDrawerRight from "../components/NewNav.js"


function Home() {
    return (
        <div>
            <div id='home' className="home">
                <PersistentDrawerRight/>
                <LandingVideo name="top" />
                <CTA />
            </div>
            <Info />
        </div>

    )

}

export default Home;