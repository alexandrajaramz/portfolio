import React from 'react';
import Skills from './Skills';
import Bio from './Bio';

const About = () => {
  return(
    <section className="main-about" id="about">
      <Bio />
      <Skills />
    </section>
  );
}

export default About;