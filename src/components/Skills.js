import React from "react";
import portfolioData from "../data/portfolioData";

function Skills() {

  const skills = portfolioData.skills;

  return (
    <section
      id="skills"
      className="section"
    >

      <div className="section-title">
        <span>02</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {Object.entries(skills).map(
          ([category, items]) => (

            <div
              className="skill-card"
              key={category}
            >

              <h3>{category}</h3>

              <div className="skill-list">

                {items.map((skill) => (

                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Skills;