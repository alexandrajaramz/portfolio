import React from 'react';
import alex from '../images/alex-v-2.jpg';

const Bio = () => {
  return(
    <div className="about__bio">
      <h2 className="about__title">About me</h2>
      <img className="about__img" src={alex} alt="Fotografía de Alexandra" width="250px"/>
      <div className="about__quote-wrapper">
        <p className="about__quote">
          “Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that."
        </p>
        <p className="about__grace">
          Grace Murray Hopper
        </p>
      </div>
      <div className="about__pitch">
        <p className="about__content">
          Changes and challenges do not scare me, and as Grace Hopper said herself too, "I've always been more interested in the future than in the past".
        </p>
        <p className="about__content">
          My name is Alexandra Jara and I'm junior front end developer. I think the future is coded, and I want to be writting it, so in June 2019 I started Adalab's front end develpment bootcamp to get the knowlegde I needed to start doing it. 
        </p>
        <p className="about__content">
          My profesional background includes sales and customer support, wich taught me to enjoy teamwork. I'm also a vet nurse, and working in a hospital I learnt to be organized and make clear priority tasks.
        </p>
        <p className="about__content">
          I'm currently looking for my first job as developer, so if you want to met me please get in touch ;)
        </p>
      </div>
    </div>
  );
}

export default Bio;