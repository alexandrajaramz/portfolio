import React from 'react';
import {Link} from 'react-scroll';
import '../styles/Hero.scss';
import down from '../images/down.png';

const Hero = () => {
  return (
    <div className="header-hero_wrapper">
      <div className="hero__text-wrapper">
        <h1 className="hero_name appear-effect">Alexandra Jara</h1>
        <span className="appear-front">
          <p className="hero_frontend">Front-end developer</p>
        </span>
      </div>
      <Link to="about" smooth={true} duration={400} className="hero__link-down"><img src={down} alt="Go down arrow" className="down-img"/></Link>
    </div>
  );
}

export default Hero;


