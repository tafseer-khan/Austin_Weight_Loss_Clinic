import React from "react";
import "../styles/pages.css";

function Services() {
  return (
    <div id="Services" class="page">
      <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
        Treatements we provide
      </h1>
      <hr class="large" data-content="<><><><><>" />
      <hr class="small" data-content="<><><>" />
      <hr class="tiny" data-content="<>" />
      <br />
      <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
        Our treatments seperate us from just any normal diets.
      </h2>
      <br />
      <br />
      <div class="boxbody">
        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            class="col"
          >
            <div class="box">
              <div class="boxcontent">
                <h3 class="header">Medical Weight Loss</h3>
                <br></br>
                <ul>
                  <li>
                    Prescription weight loss medication program with nutrition
                    and lifestyle change counseling
                  </li>
                  <li>
                    Medication prescriptions (filled at your pharmacy) such as:
                    <ul>
                      <li>PHENTERMINE</li>
                      <li>SEMAGLUTIDES - WEGOVY, OZEMPIC, MOUNJARO, ZEP BOUND</li>
                      <li>DITHYLPROPION</li>
                      <li>PHENDIMETRAZINE</li>
                      <li>CONTRAVE</li>
                      <li>QYSEMIA</li>
                    </ul>
                    {/* (FDA approved weight loss medications) */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            class="col"
          >
            <div class="box">
              <div class="boxcontent">
                <h3 class="header">
                  Bio-identical Hormone Replacement Therapy
                </h3>
                <h5 class="header">(Available at Round Rock Location)</h5>
                <br></br>
                <ul>
                  <li>
                    Female Hormone Replacement
                    <ul>
                      <li>
                        FDA approved female hormone replacement therapy.
                        BIO-IDENTICAL
                      </li>
                      <li>
                        Can improve muscle function, metabolism, bone loss,
                        sexual desire, sexual dysfunction and foggy thinking.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Testosterone
                    <ul>
                      <li>Low T Therapy.</li>
                      <li>FDA approved male hormone injections.</li>
                      <li>
                        Can improve weight loss, sex drive, mood, fatigue and
                        muscle mass.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            class="col"
          >
            <div class="box">
              <div class="boxcontent">
                <h3 class="header">Injectables</h3>
                <br></br>
                <ul>
                  <li>
                    GLP1 Injectables (Compounded & Manufactured)
                    <ul>
                      <li>
                        Appetite suppression and blood sugar regulation.
                      </li>
                    </ul>
                  </li>
                  <li>
                    B12
                    <ul>
                      <li>
                        Increases metabolism and energy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Lipoden
                    <ul>
                      <li>
                        Liver detox, and fat burner.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            class="col"
          >
            <div class="box">
              <div class="boxcontent">
                <h3 class="header">Other Supplements</h3>
                <br></br>
                <ul>
                  <li>
                    We also have a selection of some oral vitamin/mineral
                    supplements, fiber supplements, shakes, and bars for your
                    convenience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
