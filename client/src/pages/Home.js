import React, { useState, Component } from "react"
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Alert from "../components/Alert"


function Home(){
    

        return (
            <div class="homeBG">
                <Alert/>
                <Navbar />
                <Jumbotron />
            </div>
        )
}
export default Home;