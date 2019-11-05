import React from 'react';
import '../styles/Projects.scss';
import anonymous from '../images/projects/anonymous-proxy.png';
import fiveDrops from '../images/projects/fivedrops.png';
import seriesFinder from '../images/projects/series-finder.png';
import awesomePC from '../images/projects/profile-cards.png';
import refactoringReact from '../images/projects/refactoring-react.png';
import rickMorty from '../images/projects/rick-morty.png';
import travelWallet from '../images/projects/travel-wallet.png';

const Projects = () => {
  return(
    <React.Fragment>
      <div className="projects__anchor" id="projects"></div>
      <section className="main-projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__wrapper">
          <ul className="projects__list">
            <li className="project__item-wrapper">
              <img src={anonymous} alt="Anonymous proxy project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">Anonymous proxy</h3>
                <h4 className="project__techs">HTML | CSS | FLEXBOX</h4>
                <p className="project__description">My first responsive web.</p>
                <div className="project__links">
                  <a href="https://alexandrajaramz.github.io/m1-evaluacion-final-alexandrajaramz/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/g-m1-fivedrops" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={fiveDrops} alt="FiveDrops project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">FiveDrops</h3>
                <h4 className="project__techs">HTML | CSS | GRID | SASS</h4>
                <p className="project__description">Corporative website.</p>
                <div className="project__links">
                  <a href="https://alexandrajaramz.github.io/g-m1-fivedrops/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/m1-evaluacion-final-alexandrajaramz" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={seriesFinder} alt="Series finder project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">Series finder</h3>
                <h4 className="project__techs">JAVASCRIPT | API REST | LOCAL STORAGE</h4>
                <p className="project__description">You can search your favorite series.</p>
                <div className="project__links">
                  <a href="http://beta.adalab.es/m2-evaluacion-final-alexandrajaramz/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/m2-evaluacion-final-alexandrajaramz" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={awesomePC} alt="Awesome profile-cards project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">Awesome profile-cards</h3>
                <h4 className="project__techs">JAVASCRIPT | EVENTS | LOCAL STORAGE</h4>
                <p className="project__description">Create your digital contact cards.</p>
                <div className="project__links">
                  <a href="https://alexandrajaramz.github.io/g-m2-the-scripters/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/g-m2-the-scripters" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={refactoringReact} alt="Refactoring and migration to React project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">APC to React</h3>
                <h4 className="project__techs">REACT | COMPONENTS | STATE</h4>
                <p className="project__description">Refactoring and migration to React of inherited code.</p>
                <div className="project__links">
                  <a href="http://beta.adalab.es/g-m3-actreact/#/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/g-m3-actreact" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={rickMorty} alt="Rick and Morty directory project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">Rick&Morty directory</h3>
                <h4 className="project__techs">REACT | COMPONENTS | STATE | REACT ROUTER</h4>
                <p className="project__description">Directory with detail views.</p>
                <div className="project__links">
                  <a href="http://beta.adalab.es/m3-evaluacion-final-alexandrajaramz/#/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/m3-evaluacion-final-alexandrajaramz" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
            <li className="project__item-wrapper">
              <img src={travelWallet} alt="Travel Wallet project" className="project__img"/>
              <div className="project__text-wrapper">
                <h3 className="project__title">Travel Wallet <span>for Triporate</span></h3>
                <h4 className="project__techs">REACT | LIBRARIES</h4>
                <p className="project__description">Multi-device PKPASS viewer.</p>
                <div className="project__links">
                  <a href="https://alexandrajaramz.github.io/triporate-travel-wallet/#/" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href="https://github.com/alexandrajaramz/triporate-travel-wallet" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
       
export default Projects;