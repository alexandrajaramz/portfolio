import React from 'react';
import HeaderNav from './HeaderNav';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="page__header">
      <div className="header__anchor" id="top"></div>
      <HeaderNav />
      <Hero />
    </header>
  );
}

export default Header;


