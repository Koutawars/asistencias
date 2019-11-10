import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ListaGrupos from '../components/ListaGrupos';
import { withRouter } from 'react-router-dom';


class DocenteGrupos extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            grupos: [
                {
                    grupo: 1,
                    horario: 'Viernes 8-12',
                    n_estudiantes: 20,
                    salon: 'Modelado',
                    programa: 'Ingenieria de Sistemas',
                },
                {
                    grupo: 2,
                    horario: 'Sabados 7-11',
                    n_estudiantes: 30,
                    salon: 'Lab. Redes',
                    programa: 'Ingenieria de Sistemas',
                },
                {
                    grupo: 3,
                    horario: 'Lunes 8-12',
                    n_estudiantes: 27,
                    salon: 'Sistemas Operativos',
                    programa: 'Ingenieria de Sistemas',
                },
            ],
        }
    }

    render() {
        const materiaId = this.props.match.params.id;
        console.log(materiaId);
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                
                <h4 className="left-align">
                    <span>Grupos de XD</span>
                </h4>
                <div className="divider"></div>
                <div className="section">
                    <div className="container center-align">
                        <ListaGrupos grupos={this.state.grupos} materia={materiaId}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteGrupos);