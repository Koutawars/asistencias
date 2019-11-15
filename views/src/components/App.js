import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* Componentes o paginas importadas*/
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Auth from './AuthenticatedComponent'

import Layout from './Layout';
import DocenteAcademico from '../pages/DocentePages/DocenteAcademico';
import DocenteGrupos from '../pages/DocentePages/DocenteGrupos';
import DocenteMateriaGrupo from '../pages/DocentePages/DocenteMateriaGrupo';
import DocenteCrearClase from '../pages/DocentePages/DocenteCrearClase';
import DocenteAsistencia from '../pages/DocentePages/DocenteAsistencia';
import DocenteModificarClase from '../pages/DocentePages/DocenteModificarClase';

import EstudianteAcademico from '../pages/EstudiantePages/EstudianteAcademico';
import EstudianteMateriaClase from '../pages/EstudiantePages/EstudianteMateriaClase';

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
              <Route exact path={"/docente/academico/grupo/:id/:claseId/asistencia"}  component={Auth(DocenteAsistencia)} ></Route>
              <Route exact path={"/docente/academico/grupo/:id/crearClase"}  component={Auth(DocenteCrearClase)} ></Route>
              <Route exact path={"/docente/academico/grupo/:id/modificarClase"}  component={Auth(DocenteModificarClase)} ></Route>

              <Route exact path={"/estudiante/academico"} component={Auth(EstudianteAcademico)} ></Route>
              <Route exact path={"/docente/academico/:id"}  component={Auth(EstudianteMateriaClase)} ></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      );
    }
}

export default App;
