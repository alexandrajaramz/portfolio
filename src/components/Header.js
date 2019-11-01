import React from 'react';
import HeaderNav from './HeaderNav';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="page__header">
      <HeaderNav />
      <Hero />
    </header>
  );
}

export default Header;


