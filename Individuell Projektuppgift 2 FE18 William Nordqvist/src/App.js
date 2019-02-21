
import React, { Component } from 'react';
import { Nav, Main } from './Components/Nav';
import './App.css';


class App extends Component {
    state = {}
    render() {
        return (
            <div className="app" >
                <Nav />
                <Main />
            </div>
        );
    }
}


export default App;
