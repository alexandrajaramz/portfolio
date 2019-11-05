import React from 'react';
import SocialNetworks from './SocialNetworks';
import '../styles/Contact.scss';

const Contact = () => {
  return(
    <React.Fragment>
      <div className="contact__anchor" id="contact"></div>
      <section className="main-contact">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__phrase">If you want to collaborate with me on a project, or simply say hi, please check the options below :)</p>
        <div className="contact__info-wrapper">
          <div className="contact__media-wrapper">
            <div className="media__location-wrapper">
              <p className="location-label">Current location</p>
              <p className="location-place">Madrid, Spain</p>
            </div>
            <div className="media__email-wrapper">
              <p className="email-label">Email</p>
              <p className="email-direction"><a className="email-link" href="mailto:alexandra.jara.mz@gmail.com" target="_blank" rel="noopener noreferrer">
              alexandra.jara.mz@gmail.com</a></p>
            </div>
          </div>
          <SocialNetworks />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;