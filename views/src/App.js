import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import AuthenticatedComponent from './components/AuthenticatedComponent'


class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route path={"/login"} component = {AuthenticatedComponent} ></Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
