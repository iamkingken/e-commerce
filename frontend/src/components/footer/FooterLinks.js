import React from "react";
import "./FooterLinks.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logoImg from "../../assets/shopito_logo.png";

const FooterLinks = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="conainer contact">
          <div className="contact-icon">
            <FaFacebook className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Let's Talk?</h2>
          <a href="" className="btn btn-dark">
            Make an enquiry!
          </a>
        </div>
      </section>

      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Link</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Resources</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Link</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Company</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Link</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Partners</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Link</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterLinks;
