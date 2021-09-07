import React from "react"
import LandingVideo from "../components/LandingVideo"
import NavBar from "../components/Navbar"
import CTA from "../components/CTA"


function Home2(){    
    return(
        <div id='home' className="home">
                <NavBar/>
                <LandingVideo/>
                <CTA/>
        </div>
    )
    
}

export default Home2;