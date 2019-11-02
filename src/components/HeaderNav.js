import React from 'react';
import {Link} from 'react-scroll';
import '../styles/HeaderNav.scss';

const HeaderNav = () => {
  return(
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="nav__list-item nav-about"><Link to="about" smooth={true} duration={750}>About</Link></li>
        <li className="nav__list-item"><Link to="skills" smooth={true} duration={750}>Skills</Link></li>
        <li className="nav__list-item"><Link to="projects" smooth={true} duration={750}>Projects</Link></li>
        <li className="nav__list-item nav-contact"><Link to="contact" smooth={true} duration={750}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;