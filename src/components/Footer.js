import React from "react";
import "../styles/pages.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div class="footersection">
      <div class="footer">
        <div class="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/austinweightlosstoday/"
            style={{ color: "white" }}
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/weightlosharmin?lang=en"
            style={{ color: "white" }}
          >
            <TwitterIcon />
          </a>
        </div>

        <div class="shamelessplug">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tkhan94/"
            style={{ color: "white" }}
          >
            <LinkedInIcon />
          </a>
          Designed By: Tafkhan
        </div>
      </div>
    </div>
  );
}

export default Footer;
