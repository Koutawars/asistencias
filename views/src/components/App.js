import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* Componentes o paginas importadas*/
import Docente from '../pages/Docente';
import DocenteAcademico from '../pages/DocenteAcademico';
import DocenteGrupos from '../pages/DocenteGrupos';
import Layout from './Layout';
import Login from '../pages/Login';
import Dashboard from './dashboard';
import AuthenticatedComponent from './AuthenticatedComponent';
import DocenteMateriaGrupo from '../pages/DocenteMateriaGrupo';
import DocenteCrearClase from '../pages/DocenteCrearClase';

class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path={"/"} component = {Login} ></Route>
              <Route exact path={"/docente"} component = {Docente} ></Route>
              <Route exact path={"/docente/academico"} component = {DocenteAcademico} ></Route>
              <Route exact path={"/docente/academico/grupo"} component = {DocenteGrupos} ></Route>
              <Route exact path={"/docente/academico/grupo/materia"}  component={DocenteMateriaGrupo} ></Route>
              <Route exact path={"/docente/academico/grupo/materia/crear_clase"}  component={DocenteCrearClase} ></Route>

              <AuthenticatedComponent>
              </AuthenticatedComponent>
              
            </Switch>
          </Layout>
        </BrowserRouter>
      );
    }
}

export default App;
