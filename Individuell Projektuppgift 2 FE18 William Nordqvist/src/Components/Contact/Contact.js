import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import './Contact.css';


const About = () => (
    <div className="contact">
        <Icon />

    </div>
      );

const Icon = () => (
    <div className="icons">
        <a href="https://www.facebook.com/wnordqvist" >
            <FontAwesomeIcon
                icon={faFacebookSquare}
                size="8x"
                className="icon" />
        </a>
        <a href="https://www.instagram.com/willmister25/?hl=sv" >
            <FontAwesomeIcon
                icon={faInstagram}
                size="8x"
                className="icon" />
        </a>

        <a href="https://github.com/WilliamNordqvist" >
            <FontAwesomeIcon
                icon={faGithub}
                size="8x"
                className="icon" />
        </a>
        <a href={'mailto:wnordqvist@gmail.com'} >
            <FontAwesomeIcon
                icon={faEnvelope}
                size="8x"
                className="icon" />
        </a>

        <a href="https://www.linkedin.com/in/william-nordqvist-7221b340/" >
            <FontAwesomeIcon
                icon={faLinkedin}
                size="8x"
                className="icon" />
        </a>
    </div>
      );

export default About;
