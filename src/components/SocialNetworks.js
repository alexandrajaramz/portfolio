import React from 'react';

const SocialNetworks = () => {
  return(
    <ul className="social-networks">
      <li>
        <span className="social-mail">
          <a 
            className="social-to" 
            href="mailto:alexandra.jara.mz@gmail.com"
            target="_blank" rel="noopener noreferrer">
            Drop me an email
          </a>
        </span>
      </li>
      <li>
        <a 
          className="social-to" 
          href="https://www.linkedin.com/in/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        ·
      </li>
      <li>
        <a 
          className="social-to" 
          href="https://github.com/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-alt"></i>
        </a>
        ·
      </li>
      <li>
        <a 
          className="social-to" 
          href="https://twitter.com/alexandrajaramz"
          target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialNetworks;