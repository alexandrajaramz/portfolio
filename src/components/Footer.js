import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo-A.png';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="page__footer">
      <div className="footer-copyright">
        <span className="footer-copy">&copy;</span>
        <span className="footer-year">2019</span>
      </div>
      <Link to="top" smooth={true} duration={1000}>        
        <img src={logo} alt="Alexandra's logo" className="footer-logo"/>
      </Link>
      <p className="footer-name">Alexandra Jara</p>
    </footer>
  );
}

export default Footer;  