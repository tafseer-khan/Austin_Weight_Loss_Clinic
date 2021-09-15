import React from "react";
import '../styles/pages.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';


function Footer() {
    return (
        <div class ='footer'>
                <a target= '_blank'href='https://www.facebook.com/austinweightlosstoday/'
                 style={{color:'white'}}>
                <FacebookIcon/>
                </a>
                <a target= '_blank'href='https://twitter.com/weightlosharmin?lang=en'
                 style={{color:'white'}}>
                <TwitterIcon/>
                </a>
        </div>

    )
}

export default Footer;