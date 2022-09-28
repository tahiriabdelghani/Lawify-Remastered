import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Branches</h4>
            <ul>
              <li>
                <a href="#">Droit de la famille</a>
              </li>
              <li>
                <a href="#">Droit constitutionnel</a>
              </li>
              <li>
                <a href="#">Droit du travail</a>
              </li>
              <li>
                <a href="#">Droit privé </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Conseil juridique</a>
              </li>
              <li>
                <a href="#">Consultation juridique </a>
              </li>
              <li>
                <a href="#">Aide juridique</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacter nous </h4>
            <div className="contacter">
              <a href="#">
                <i className="fa fa-phone"> 0678502289</i>
              </a>
              <a href="#">
                <i className="fa fa-envelope"> avocat@gmail.com</i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>suiver nous </h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
