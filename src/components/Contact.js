import React from "react";
import portfolioData from "../data/portfolioData";

function Contact() {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="section contact-section"
    >

      <div className="section-title">

        <span>07</span>

        <h2>Let's Connect</h2>

      </div>

      <div className="contact-card">

        <h2>
          Have a project or opportunity?
        </h2>

        <p>
          I'm always interested in discussing
          software development, projects and
          opportunities.
        </p>

        <a
          className="primary-btn"
          href={`mailto:${personal.gmail}`}
        >
          Contact Me
        </a>

        <div className="contact-info">

          <span>
            📧 {personal.gmail}
          </span>

          <span>
            📍 {personal.location}
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;