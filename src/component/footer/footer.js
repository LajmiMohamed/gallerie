import React from "react";
import "./footer.css";
import logo0 from "../../images/logo2.png";

const Footer = props => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <img src={logo0} alt="TheEvenet" />
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h4>QUI SOMME-NOUS</h4>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contacter Nous</h4>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Suivez nous</h4>
              <div className="social-links">
                <a href="#s">
                  <img  alt="fb" />
                </a>
                <a href="#s">
                  <img
                 
                    style={{
                      width: 35
                    }}
                    alt="g+"
                  />
                </a>
                <a href="#s">
                  <img  alt="fb" />
                </a>
                <a href="#s">
                  <img  alt="fb" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;