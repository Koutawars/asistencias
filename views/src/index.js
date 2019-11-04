import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={ App }/>
    </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
