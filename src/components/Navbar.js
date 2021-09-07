import React from "react";
import '../styles/nav.css'
import Burger  from '../components/Burger.js'

function NavBar() {

    return (
        
        <div id="navigation">
            <a className="title" href="/">
                <h1>Austin Weight Loss</h1>
            </a>
            <div className='Burger'>
                <Burger/>
            </div>
        </div>
    )
}

export default NavBar