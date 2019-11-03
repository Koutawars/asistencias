import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login'
import Dashboard from './components/dashboard'
import AuthenticatedComponent from './components/AuthenticatedComponent'


class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route path={"/login"} component = {Login} ></Route>
            <AuthenticatedComponent>
              <Route path={"/"} component = {Dashboard} ></Route>
            </AuthenticatedComponent>
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
