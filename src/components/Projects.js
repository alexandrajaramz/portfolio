import React from 'react';
import '../styles/Projects.scss';

const Projects = () => {
  return(
    <React.Fragment>
      <div className="projects__anchor" id="projects"></div>
      <section className="main-projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__wrapper"></div>
        <div className="projects__wrapper"></div>
        <div className="projects__wrapper"></div>
        <div className="projects__wrapper"></div>
        <div className="projects__wrapper"></div>
        <div className="projects__wrapper"></div>
      </section>
    </React.Fragment>
  );
}

export default Projects;