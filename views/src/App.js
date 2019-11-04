import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login'
import Dashboard from './components/dashboard'
import AuthenticatedComponent from './components/AuthenticatedComponent'
import MateriaDocente from './components/MateriaDocente'


class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route path={"/login"} component = {Login} ></Route>
            <AuthenticatedComponent>
              <Route path={"/materias"}  component={MateriaDocente} ></Route>
              <Route path={"/"} exact component = {Dashboard} ></Route>
            </AuthenticatedComponent>
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
