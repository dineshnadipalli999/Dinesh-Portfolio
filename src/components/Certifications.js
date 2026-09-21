import React from "react";
import portfolioData from "../data/portfolioData";

function Certifications() {

  return (
    <section className="section">

      <div className="section-title">

        <span>06</span>

        <h2>Certifications</h2>

      </div>

      <div className="certifications-grid">

        {portfolioData.certifications.map(
          (certificate, index) => (

            <div
              className="certificate-card"
              key={index}
            >

              <div className="certificate-icon">
                ✓
              </div>

              <div>

                <h3>
                  {certificate.name}
                </h3>

                <p>
                  {certificate.issuer}
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Certifications;