import React from "react";
import portfolioData from "../data/portfolioData";

function Education() {

  return (
    <section
      id="education"
      className="section"
    >

      <div className="section-title">

        <span>05</span>

        <h2>Education</h2>

      </div>

      <div className="education-card">

        {portfolioData.education.map(
          (edu, index) => (

            <div key={index}>

              <h3>
                {edu.degree}
              </h3>

              <p className="institution">
                {edu.institution}
              </p>

              <div className="education-details">

                <span>
                  {edu.duration}
                </span>

                <span>
                  {edu.score}
                </span>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Education;