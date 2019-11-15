import React, { Component } from 'react';

import NavbarLog from '../../components/NavbarLog';
import ListaMaterias from '../../components/Listas/ListaMaterias';

import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

/*
    Esta vista es para mostrar las materias del estudiante que es tipo de usuario 2 (Verificar con BD)
    
    Le paso el tipo de usuario a ListaMaterias porque en el componente lo reutilizo cambiandole el 
    path dependiendo el tipo de usuario
*/

class EstudianteAcademico extends Component {
    render() {
        
        const info = this.state;

        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <h4 className="left-align">
                    <span>Asignaturas</span>
                </h4>

                <div className="divider"></div>

                <div className="section">
                    <div className="container center-align">
                        <ListaMaterias materias={info.materias} tipo_usuario={2}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default EstudianteAcademico;