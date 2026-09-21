import React from "react";
import portfolioData from "../data/portfolioData";

function Footer() {

  return (
    <footer className="footer">

      <div>
        © {new Date().getFullYear()}{" "}
        {portfolioData.personal.name}
      </div>

      <div>
        Built with React
      </div>

    </footer>
  );
}

export default Footer;