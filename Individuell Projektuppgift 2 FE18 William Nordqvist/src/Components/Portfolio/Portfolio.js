import React from 'react';
import './Portfolio.css';
import port1 from '../../../public/assets/Portolio1.jpg';
import port2 from '../../../public/assets/Portfolio2.jpg';
import Quill from '../../../public/assets/Quill.jpg';
import Char from '../../../public/assets/Character.jpg';

const About = () => (
    <div className="portfolio">
        <Cards />
    </div>
    );


export default About;

const Cards = () => (
    <div className="cardFlex">

        <div className="cardContainer">
            <a href="http://wnordqvist.com/portfolio/portfolio.html">
                <img src={port1} alt="Portfolio 1.0" />
            </a>
            <div className="cardContent">
                <p>Portfoli 1.0</p>
            </div>
        </div>

        <div className="cardContainer">
            <img src={port2} alt="Portfoli 2.0" />
            <div className="cardContent">
                <p>Portfoli 2.0</p>
            </div>
        </div>

        <div className="cardContainer">
            <a href="http://wnordqvist.com/Quire-by-Capricorn/html/">
                <img src={Quill} alt="Stockholm3" />
            </a>
            <div className="cardContent">
                <p>Quill Browser Editor</p>
            </div>
        </div>

        <div className="cardContainer">
            <a href="http://wnordqvist.com/CharacterGenerator/">
                <img src={Char} alt="Stockholm4" />
            </a>
            <div className="cardContent">
                <p>Charachter generator</p>
            </div>
        </div>

    </div>
);
