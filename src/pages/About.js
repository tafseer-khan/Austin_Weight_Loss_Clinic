import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

function About() {
    return (
        <div class="aboutBG">
            <Navbar />
            <div class="card">
                <div class="card-body">
                    <h1>
                        We know life can be busy, challenging, and tiring, how can one find the time to worry about their weight?
                    {/* Our goal is to make it easy and manageable, so you dont have to stress.  */}
                    </h1>
                    <hr />
                    <h4>
                        Our goal is to make it easy and manageable, so you dont have to stress.
                    </h4>
                    <div>
                        <br />
                    Taking care of your health is the first step in taking charge of your life,
                    and we commend you for taking an interest in doing so!
                    <br /><br />
                    Austin Weight Loss offers FDA approved weight loss
                    medications, carefully chosen and determined by our health care providers
                    to fit your needs.
                    <br /><br />
                    Through proper medication, and medical professional guided dieting you
                    will get a jumpstart towards your weight loss goals.
                    </div>
                </div>

            </div>
            <div class="card">
                <div class="card-body">
                    <h1>
                        And Meet Your New Bestfriend!
                    </h1>
                    <hr />
                    <h4>Sharmin Khan, Owner & Founder</h4>
                    <h5>Family Nurse Practitioner</h5>
                    Sharmin has been a Nurse Practitioner for over 15 years now.
                    She has worked in various specialties such as:
                    <br />
                    Women’s Health, Internal Medicine,
                    Family Practice and for last 13 years in Weight Loss Clinics in Houston and Austin.
                    <br /><br />
                    She has worked in the medical field all over the country for the past two decades,
                    but now resides in Austin with her husband and kids.

                    </div>
            </div>
        </div>

    )
}
export default About;
