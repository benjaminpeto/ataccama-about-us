import React from "react";

import './Footer.styles.scss';

import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/youtube.svg';

function  Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='nav-wrapper'>
        <ul>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>

      <div className='social-wrapper'>
        <ul>
          <li><Linkedin /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
          <li><Facebook /></li>
          <li><Youtube /></li>
        </ul>
        <p>&copy; Ataccama, 2021</p>
      </div>
    </footer>
  );
}

export default Footer;