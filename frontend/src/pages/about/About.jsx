/* About.jsx */
import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./About.css";

const About = () => {
  // variables

  // page rendering
  return (
    <div>
      <Header className="w-100" />
      <h1>About Us</h1>
      <p>
        Welcome to WaveCheck. We provide music recommendations based on your
        search.
      </p>
      <Footer className="w-100" />
    </div>
  );
};

export default About;
