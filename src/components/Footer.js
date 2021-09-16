import React from "react";
import '../styles/pages.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div class='footersection'>
            <div class='footer'>
                <a target='_blank' href='https://www.facebook.com/austinweightlosstoday/'
                    style={{ color: 'white' }}>
                    <FacebookIcon />
                </a>
                <a target='_blank' href='https://twitter.com/weightlosharmin?lang=en'
                    style={{ color: 'white' }}>
                    <TwitterIcon />
                </a>
                <div class='shamelessplug'>
                    <a target='_blank' href='https://github.com/tafseer-khan'
                        style={{ color: 'white' }}>
                        <GitHubIcon />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/tkhan94/'
                        style={{ color: 'white' }}>
                        <LinkedInIcon />
                                Designed By: Tafkhan
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer;