import React from "react";
import portfolioData from "../data/portfolioData";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-text">
          Hello, I'm
        </p>

        <h1>
          {personal.name}
        </h1>

        <h2>
          {personal.role}
        </h2>

        <p className="hero-description">
          {personal.tagline}
        </p>

        <div className="hero-buttons">

          {/* View Projects */}
          <a
            href="#projects"
            className="primary-btn"
          >
            View Projects
          </a>

          {/* View Resume */}
          <a
            href="/Dinesh__V.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/Dinesh__V.pdf"
            download="Dinesh__V.pdf"
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={personal.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;