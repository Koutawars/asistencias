import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import ListaClases from '../components/ListaClases';
import NavbarLog from '../components/NavbarLog';

class DocenteMateriaGrupo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            clases: [
                {
                    clase: 1,
                    horario: 'Viernes 8-12',
                    n_estudiantes: 20,
                    salon: 'Modelado',
                    fecha: '13/09/2019',
                    programa: 'Ingenieria de Sistemas',
                    tema: 'Arquitecto vs Diseñador',
                },
                {
                    clase: 2,
                    horario: 'Sabados 7-11',
                    n_estudiantes: 30,
                    salon: 'Lab. Redes',
                    fecha: '13/09/2019',
                    programa: 'Ingenieria de Sistemas',
                    tema: 'Arquitecto vs Diseñador',
                },
                {
                    clase: 3,
                    horario: 'Lunes 8-12',
                    n_estudiantes: 27,
                    salon: 'Sistemas Operativos',
                    fecha: '13/09/2019',
                    programa: 'Ingenieria de Sistemas',
                    tema: 'Arquitecto vs Diseñador',
                },
                {
                    clase: 4,
                    horario: 'Lunes 8-12',
                    n_estudiantes: 27,
                    salon: 'Sistemas Operativos',
                    fecha: '13/09/2019',
                    programa: 'Ingenieria de Sistemas',
                    tema: 'Arquitecto vs Diseñador',
                },
                {
                    clase: 5,
                    horario: 'Lunes 8-12',
                    n_estudiantes: 27,
                    salon: 'Sistemas Operativos',
                    fecha: '13/09/2019',
                    programa: 'Ingenieria de Sistemas',
                    tema: 'Arquitecto vs Diseñador',
                },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavbarLog id="999" firstName="Johan" lastName="Robles"></NavbarLog>
                <div className="container">
                    <div className="row">
                        <h4 className="left-align">{this.props.location.state.materia} - Clases</h4>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <FaSearch className="prefix"/>
                                        <input type="text" className="form-control" />
                                        <label >Buscar por tema, grupo, salon...</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <ListaClases clases={this.state.clases} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteMateriaGrupo;