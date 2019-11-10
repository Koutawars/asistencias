import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* Componentes o paginas importadas*/
import Dashboard from '../pages/Dashboard';
import DocenteAcademico from '../pages/DocenteAcademico';
import DocenteGrupos from '../pages/DocenteGrupos';
import Layout from './Layout';
import Login from '../pages/Login';
import DocenteMateriaGrupo from '../pages/DocenteMateriaGrupo';
import DocenteCrearClase from '../pages/DocenteCrearClase';
import Auth from './AuthenticatedComponent'
import DocenteAsistencia from '../pages/DocenteAsistencia';

class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path={"/login"} component = {Login} ></Route>
              <Route exact path={"/"} component = {Auth(Dashboard)} ></Route>
              <Route exact path={"/docente/academico"} component = {Auth(DocenteAcademico)} ></Route>
              <Route exact path={"/docente/academico/:id"} component = {Auth(DocenteGrupos)} ></Route>
              <Route exact path={"/docente/academico/grupo/:id"}  component={Auth(DocenteMateriaGrupo)} ></Route>
              <Route exact path={"/docente/academico/grupo/materia/asistencia"}  component={Auth(DocenteAsistencia)} ></Route>
              <Route exact path={"/docente/academico/grupo/materia/crear_clase"}  component={Auth(DocenteCrearClase)} ></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      );
    }
}

export default App;
