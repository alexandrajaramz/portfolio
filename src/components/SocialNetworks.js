import React from 'react';
import '../styles/SocialNetworks.scss';

const SocialNetworks = () => {
  return(
    <ul className="social-networks">
      <li>
        <a 
          className="social-to" 
          href="https://www.linkedin.com/in/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in social-icon"></i>
        </a>
      </li>
      <li>
        <a 
          className="social-to" 
          href="https://github.com/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-alt social-icon"></i>
        </a>
      </li>
      <li>
        <a 
          className="social-to" 
          href="https://twitter.com/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter social-icon"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialNetworks;