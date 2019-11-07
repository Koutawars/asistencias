import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

const container = document.getElementById('root');

ReactDOM.render( < App/>, container);

serviceWorker.unregister();
