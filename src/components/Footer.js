import React from 'react';
import logo from '../images/logo-A.png';
import SocialNetworks from './SocialNetworks';

const Footer = () => {
  return (
    <footer className="page__footer">
      <p className="footer-copy">&copy; 2019 Alexandra Jara</p>
      <div className="footer-logo_wrapper">
        <img src={logo} width="40px" alt="Alexandra's logo" className="footer-logo"/>
      </div>
      <div className="footer-social">
        <span className="social-mail">
          <a 
            className="social-to" 
            href="mailto:alexandra.jara.mz@gmail.com"
            target="_blank" rel="noopener noreferrer">
            Drop me an email
          </a>
        </span>
        <SocialNetworks />
      </div>
    </footer>
  );
}

export default Footer;  