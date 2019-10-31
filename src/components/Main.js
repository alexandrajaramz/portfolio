import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/Main.scss';

const Main = () => {
  return(
    <main className="page__main">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;