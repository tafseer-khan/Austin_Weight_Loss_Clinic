import React from "react";
import '../styles/video.css'
import video from "../assets/landing.mp4"

function LandingVideo() {
    return (
        <video autoPlay loop muted id="landingvid">
            <source src={video} type='video/mp4' />
        </video>
    )
}

export default LandingVideo;