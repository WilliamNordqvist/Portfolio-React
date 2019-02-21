import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
 ), document.getElementById('root'));
