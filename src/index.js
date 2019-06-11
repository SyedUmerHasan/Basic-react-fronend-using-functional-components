import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
let heights = window.innerHeight;
let widths = window.innerWidth;
if (widths > 767) {
    document.getElementById("header").style.height = heights + 200 + "px";
} else {
    document.getElementById("header").style.height = heights - 30 * heights / 100 + "px";
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
