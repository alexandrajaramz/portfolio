import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <header className="page__header">
          <nav className="header-nav">
            <ul>
              <li><a href="#">Quién soy</a></li>
              <li><a href="#">Con qué trabajo</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
          <h1 className="header-name">Alexandra Jara</h1>
          <p className="header-frontend">Front-end developer</p>
          <div className="header-scroll">v</div>
        </header>
        <main className="page__main">
          <section className="main-about">
            <h2 className="about__title">Quién soy</h2>
            <img className="about__img" src="./assets/images/alex-1.png" alt="Fotografía de Alexandra"/>
            <p className="about__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, voluptas minima incidunt dolor repellendus eveniet tempore sapiente totam sed sint cupiditate mollitia officiis magni iusto animi in quod, perferendis unde.
            </p>
            <p className="about__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, voluptas minima incidunt dolor repellendus eveniet tempore sapiente totam sed sint cupiditate mollitia officiis magni iusto animi in quod, perferendis unde.
            </p>
            <p className="about__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, voluptas minima incidunt dolor repellendus eveniet tempore sapiente totam sed sint cupiditate mollitia officiis magni iusto animi in quod, perferendis unde.
            </p>
          </section>
          <section className="main-skills"></section>
          <section className="main-projects"></section>
          <section className="main-contact"></section>
        </main>
        <footer className="page__footer">
          <p className="footer-text">Designed and developed by</p>
          <p className="footer-copy"> Alexandra Jara &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
