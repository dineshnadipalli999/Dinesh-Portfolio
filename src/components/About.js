import React from "react";
import portfolioData from "../data/portfolioData";

function About() {

  return (
    <section
      id="about"
      className="section"
    >

      <div className="section-title">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      <div className="about-card">

        <p>
          {portfolioData.about.description}
        </p>

      </div>

    </section>
  );
}

export default About;