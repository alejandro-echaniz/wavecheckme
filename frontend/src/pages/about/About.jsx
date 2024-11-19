/* About.jsx */
import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./About.css";

const About = () => {
  return (
    <div>
      <Header className="w-100" />

      <div className="main-content">
        <div className="about-layout">
          {/* Text Column */}
          <div className="text-column">
            <h1>About Us</h1>
            <p id="welcome-paragraph">
              Welcome to <span className="waveCheck-word">WaveCheck.me</span>,
              your personalized music discovery platform!
            </p>

            <p id="body-paragraph">
              Born from the creative minds of{" "}
              <span className="names">
                <a
                  href="https://github.com/alexdobrzycki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Dobrzycki
                </a>
              </span>
              ,{" "}
              <span className="names">
                <a
                  href="https://github.com/alejandro-echaniz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alejandro Echaniz
                </a>
              </span>
              ,{" "}
              <span className="names">
                <a
                  href="https://github.com/mgus25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maia Gustafson
                </a>
              </span>
              , and{" "}
              <span className="names">
                <a
                  href="https://github.com/SpencerLutz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spencer Lutz
                </a>
              </span>
              , <span className="waveCheck-word">WaveCheck.me</span> is designed
              to revolutionize how you connect with music. Through{" "}
              <span className="descriptor-words">artificial intelligence</span>{" "}
              and <span className="descriptor-words">machine learning</span>, we
              provide more accurate song recommendations acoustically.
            </p>

            <p id="mission-paragraph">
              <span className="mission-word">Our Mission:</span> to make
              discovering your next favorite song effortless and enjoyable.
              Whether you're diving into a new genre or curating the perfect
              playlist, <span className="waveCheck-word">WaveCheck.me</span> is
              here to guide you through the soundwaves.
            </p>

            <p id="join-paragraph">
              Join us on this musical journey and let the rhythm take you to new
              horizons. 🌊🎶
            </p>
          </div>

          {/* Image Column */}
          <div className="image-column">
            <div className="container">
              <div className="sphere"></div>
              <a
                href="https://2022.bit.camp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/bitcamp_logo.gif"
                  alt="Animated Bitcamp logo, representing our project origins"
                  className="bitcamp-gif"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer className="w-100" />
    </div>
  );
};

export default About;
