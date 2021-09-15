import React from "react";
import '../styles/pages.css'


function About() {

    return (
        <div name='About' class="page">
                <h1>
                    Treatements we provide
                </h1>
                <hr data-content='<><><><><>' />
                <br/>
                <h2>
                    Our treatments seperate us from just any normal diets.
                </h2>
                <br/><br/>
                <div class='boxbody'>
                    <div class='row'>
                        <div class='col'>
                            <div class='box'>
                                <div class='boxcontent'>
                                    <h3 class='header'>
                                        Medical Weight Loss
                                    </h3>
                                    <br></br>
                                    <ul>
                                        <li>
                                            Prescription weight loss medication program with nutrition and lifestyle change counseling
                                        </li>
                                        <li>
                                            Medication prescriptions (filled at your pharmacy) such as:
                                            <ul>
                                                <li>
                                                    Phentermine
                                                </li>
                                                <li>
                                                    Tenuate
                                                </li>
                                                <li>
                                                    Wegovy
                                                </li>
                                                <li>
                                                    Bontril
                                                </li>
                                                <li>
                                                    Contrave
                                                </li>
                                                <li>
                                                    Qysemia
                                                </li>
                                                <li>
                                                    Saxenda
                                                </li>
                                            </ul>
                                            {/* (FDA approved weight loss medications) */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class='col'>
                            <div class='box'>
                                <div class='boxcontent'>
                                    <h3 class='header'>
                                        Bio-identical Hormone Replacement Therapy
                                    </h3>
                                    <br></br>
                                    <ul>
                                        <li>
                                            Female Hormone Replacement
                                            <ul>
                                                <li>
                                                    FDA approved female hormone injections.
                                                </li>
                                                <li>
                                                    Can improve muscle function,metabolism, bone loss, and effects from menopause.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Testosterone
                                            <ul>
                                                <li>
                                                    FDA approved male hormone injections.
                                                </li>
                                                <li>
                                                    Can improve weightloss, fertility, sex drive, and mood.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class='row'>
                        <div class='col'>
                            <div class='box'>
                                <div class='boxcontent'>
                                    <h3 class='header'>
                                        Human Chorionic Gonadotropin
                                    </h3>
                                    <br></br>
                                    <ul>
                                        <li>
                                            Commonly referred to as HCG.
                                            <ul>
                                                <li>
                                                    HCG Injection with low calorie diet. 
                                                    <ul>
                                                        <li>
                                                            Natural hormone which allows abnormal fat cells to be used as energy and nutrtients.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Please check with your clinic location to confirm availabilty and current pricing.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class='col'>
                        <div class='box'>
                                <div class='boxcontent'>
                                    <h3 class='header'>
                                        Other Supplements
                                    </h3>
                                    <br></br>
                                    <ul>
                                        <li>
                                            We also have a selection of some oral vitamin/mineral supplements, fiber supplements, shakes, and bars for your convenience.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default About;