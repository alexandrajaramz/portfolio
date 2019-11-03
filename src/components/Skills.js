import React from 'react';
import '../styles/Skills.scss';

const Skills = () => {
  return(
    <section className="main-skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__hardskills">
        <li className="hardskills-item html">HTML5</li>
        <li className="hardskills-item css ">CSS3</li>
        <li className="hardskills-item sass">SASS</li>
        <li className="hardskills-item flexbox">FLEXBOX</li>
        <li className="hardskills-item grid">GRID</li>
        <li className="hardskills-item javascript">JAVASCRIPT</li>
        <li className="hardskills-item react">REACT</li>
        <li className="hardskills-item npm">NPM</li>
        <li className="hardskills-item git">GIT</li>
        <li className="hardskills-item agile">AGILE</li>

      </ul>
    </section>
  );
}

export default Skills;