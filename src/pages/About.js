import React from "react";
import '../styles/pages.css'
import "../styles/hr.scss"

function About() {
    return (
        <div id="About" class="page">
                <h1>
                    We know life can be busy, challenging, and tiring, how can one find the time to worry about their weight?
                    {/* Our goal is to make it easy and manageable, so you dont have to stress.  */}
                </h1>
                <hr data-content='<><><><><>' />
                <br/>
                <h2>
                    Our goal is to make it easy and manageable, so you dont have to stress.
                </h2>
                <div>
                    <br />
                    <h5 class='pdesc'>
                    Taking care of your health is the first step in taking charge of your life,
                    and we commend you for taking an interest in doing so!
                    Austin Weight Loss offers FDA approved weight loss
                    medications, carefully chosen and determined by our health care providers
                    to fit your needs.
                    Through proper medication, and medical professional guided dieting you
                    will get a jumpstart towards your weight loss goals.
                    </h5>
                </div>
                <div class = 'paragraph'>
                <h1>
                    And Meet Your New Bestfriend!
                </h1>
                <hr data-content='<><><><><>' />
                <br/>
                <h2>Sharmin Khan, Owner & Founder</h2>
                <h4>Family Nurse Practitioner</h4>
                <br/>
                <h5 class='pdesc'>
                Sharmin has been a Nurse Practitioner for over 15 years now.
                She has worked in various specialties such as:
                Women’s Health, Internal Medicine,
                Family Practice and for last 13 years in Weight Loss Clinics in Houston and Austin.
                She has worked in the medical field all over the country for the past two decades,
                but now resides in Austin with her husband and kids.
                </h5>
                </div>

        </div>

    )
}

export default About;