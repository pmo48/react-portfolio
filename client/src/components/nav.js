import React from "react";
// // import { Link } from "react-router-dom";
// import "./style.css";

// // Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">Pat Moriarty</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item">
            <a className="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./resume.html">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
