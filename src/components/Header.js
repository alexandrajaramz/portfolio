import React from 'react';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="page__header">
      <nav className="header-nav">
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="skills">Skills</a></li>
          <li><a href="projects">Projects</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <Hero />
    </header>
  );
}

export default Header;


