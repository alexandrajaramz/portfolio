import React from 'react';
import SocialNetworks from './SocialNetworks';
import '../styles/Contact.scss';

const Contact = () => {
  return(
    <React.Fragment>
      <div className="contact__anchor" id="contact"></div>
      <section className="main-contact">
        <h2 className="contact__title">Contact</h2>
        <SocialNetworks />
      </section>
    </React.Fragment>
  );
}

export default Contact;