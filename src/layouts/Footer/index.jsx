import React from 'react';
import './styles.css'

import logo from '../../assets/light-logo.webp'

import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-information">
          <div className="footer-information-item">
            <img src={logo}></img>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...</p>
          </div>
          <div className="footer-information-item">
            <h4 className="text-help">Help</h4>
            <ul>
              <li><a href="#">Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-information-item">
            <h4 className="text-help">Help</h4>
            <ul>
              <li><a href="#">Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-information-item">
            <h4 className="text-help">Help</h4>
            <ul>
              <li><a href="#">Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social-link">
          <ul>
            <li><a href="#"><FaTwitter/></a></li>
            <li><a href="#"><FaFacebookSquare/></a></li>
            <li><a href="#"><FaGooglePlusG/></a></li>
            <li><a href="#"><FaInstagramSquare/></a></li>
          </ul>
        </div>
        <hr/>
        <div className="footer-copyright">
          <p>Copyright © 2020, Sheena Cosmetics Powered by NiPie</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;