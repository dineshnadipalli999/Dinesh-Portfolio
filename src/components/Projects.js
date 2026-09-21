import React from "react";
import portfolioData from "../data/portfolioData";

function Projects() {

  return (
    <section
      id="projects"
      className="section"
    >

      <div className="section-title">

        <span>03</span>

        <h2>Projects</h2>

      </div>

      <div className="projects-grid">

        {portfolioData.projects.map(
          (project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.technologies.map(
                  (tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  )
                )}

              </div>

             

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Projects;