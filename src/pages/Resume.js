import React from "react";
import cv from "../images/PatMoriartyResume.pdf"
import cvimage from "../images/resume.png"

function Resume() {
  return (
  <main className="container">
    <div className="row">
        <div className="col-xl-8 text-white">
          <div className="page-header">
              <br></br>
              <br></br>
              <br></br>
              <h1 className="mt-3">Resume</h1>
          </div>
          <div className="page-header">
            <p className="text-white">Click image to download as PDF</p>
        </div>
        </div>
        <a href={cv} download>
          <img src={cvimage} className="img-fluid" alt="resume"/></a>
      </div>
      <br></br>
      </main>
  );
}

export default Resume;