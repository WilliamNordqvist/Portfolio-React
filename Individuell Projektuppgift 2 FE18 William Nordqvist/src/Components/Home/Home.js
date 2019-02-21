import Particles from 'react-particles-js';
import React from 'react';
import './Home.css';

const ParticleOpt = {
    particles: {
        number: {
            value: 250,
            density: {
                enable: true,
                value_area: 1500,
            },
        },
        line_linked: {
            color: '#808080',
            shadow: {
                enable: false,
            },
        },

    },

};


const Home = () => (
    <div className="home">
        <Particles
            className="background"
            params={ParticleOpt} />
        <div className="textContainer">
            <h1>FRONT END DEVELOPER</h1>
            <h3>William Nordvist</h3>
            <br />
            <p> Student @KYH Stockholm <br /> Feel free to browse around and learn more about me.</p>
        </div>

    </div>
      );

export default Home;
