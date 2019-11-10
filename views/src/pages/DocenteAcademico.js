import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ListaMaterias from '../components/ListaMaterias';

class Docente extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            ruta_imagen: 'https://www.lacucurucha.com.ar/circuito/images/usuario.jpeg',
            materias: [
                {
                    id: 1,
                    nombre: 'Arquitectura del Software'
                },
                {
                    id: 2,
                    nombre: 'Programación para la Web'
                },
                {
                    id: 3,
                    nombre: 'Programacion orientada a objetos'
                },
                {
                    id: 4,
                    nombre: 'Ingenieria del software'
                },
            ],
        };
    }

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
                        <ListaMaterias materias={info.materias}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default Docente;