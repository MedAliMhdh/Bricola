import React from "react";
import "./CSS/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class='site-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p class='text-justify'>
                We have been working hand in hand with craftsmen and we have
                developed a modern website for them and for you. Do you
                represent a general construction contractor? Are you a
                self-employed heating engineer? Do you want to start stone
                masonry activities? The Bricola Web team has designed and
                developed this website for your convenience and that of the
                artisans.
              </p>
            </div>

            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul class='footer-links'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contactus'> Contact us</Link>
                </li>
                <li>
                  <Link to='/ourteam'>Our team </Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright &copy; 2017 All Rights Reserved by
                <Link to='/'>Bricola</Link>.
              </p>
            </div>

            <div class='col-md-4 col-sm-6 col-xs-12'>
              <ul class='social-icons'>
                <li>
                  <a class='facebook' href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a class='twitter' href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a class='dribbble' href='#'>
                    <i class='fa fa-dribbble'></i>
                  </a>
                </li>
                <li>
                  <a class='linkedin' href='#'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
