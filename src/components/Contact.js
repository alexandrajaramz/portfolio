import React from 'react';
import SocialNetworks from './SocialNetworks';
import '../styles/Contact.scss';

const Contact = () => {
  return(
    <section className="main-contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <SocialNetworks />
    </section>
  );
}

export default Contact;