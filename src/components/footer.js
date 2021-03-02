import React from "react";
import gmail from "../images/icons8-gmail-480.png";
import linkedin from '../images/LI-In-Bug.png';
import github from "../images/GitHub-Mark-Light-120px-plus.png";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 navbar-dark bg-dark text-center">
    <span className="text-muted"> 
      <a href="mailto:pmoriarty100@gmail.com"> <img src={gmail} width="30" height="25"  alt="gmail icon profile" loading="lazy"/></a> 
      <a href="https://www.linkedin.com/in/p-b-moriarty" target="_blank"> <img src={linkedin} width="30" height="25"  alt="linkedin icon profile" loading="lazy" /></a> 
      <a href="https://github.com/pmo48" target="_blank"> <img src={github} width="30" height="25"  alt="github icon profile" loading="lazy"/></a> 
    </span>
  </footer>
  );
}

export default Footer;