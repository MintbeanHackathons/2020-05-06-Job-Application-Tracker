import React from "react";

require("./style.scss");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>
          by{" "}
          <a
            href="https://github.com/andrewthamcc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrew Tham
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
