import { NavLink, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './Nav.css';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec';

export class Nav extends Component {
    state = {}

    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then((json) => {
                this.setState({ weather: (json.main.temp - 273.15).toFixed(2) });
            });
    }

    render() {
        return (
            <nav>
                <p className="weather">
                    <FontAwesomeIcon icon={faCloud} />
                    {this.state.weather ? this.state.weather : '0'}
                </p>
                <ul>
                    <li><NavLink activeClassName="current" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="current" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeClassName="current" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
    }

export const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
      );

