import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ListaAsistencia from '../components/ListaAsistencia';

class DocenteAsistencia extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            estudiantes: [
                {
                    id: 1,
                    codigo: 2016114073,
                    nombre:'Camilo',
                    apellido: 'Laiton',
                    asistio:'SI',
                },
                {
                    id: 2,
                    codigo: 2016114074,
                    nombre:'Miller',
                    apellido: 'Meriño',
                    asistio:'SI',
                },
                {
                    id: 3,
                    codigo: 2016114075,
                    nombre:'Kevin',
                    apellido: 'Peñaranda',
                    asistio:'NO',
                },
                {
                    id: 4,
                    codigo: 2016114076,
                    nombre:'Camilo',
                    apellido: 'Laiton',
                    asistio:'NO',
                },
                {
                    id: 5,
                    codigo: 2016114077,
                    nombre:'Miller',
                    apellido: 'Meriño',
                    asistio:'SI',
                },
                {
                    id: 6,
                    codigo: 2016114078,
                    nombre:'Kevin',
                    apellido: 'Peñaranda',
                    asistio:'NO',
                },
                {
                    id: 7,
                    codigo: 2016114079,
                    nombre:'Camilo',
                    apellido: 'Laiton',
                    asistio:'SI',
                },
                {
                    id: 8,
                    codigo: 2016114080,
                    nombre:'Miller',
                    apellido: 'Meriño',
                    asistio:'NO',
                },
                {
                    id: 9,
                    codigo: 2016114081,
                    nombre:'Kevin',
                    apellido: 'Peñaranda',
                    asistio:'SI',
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavbarLog id="999" firstName="Johan" lastName="Robles"></NavbarLog>

                <div className="container">
                    <h4 className="left-align">
                        <span>Lista de asistencia - Materia</span>
                        <span>Clase # #</span>
                    </h4>

                    <div className="divider"></div>

                    <div className="section">
                        <ListaAsistencia estudiantes={this.state.estudiantes}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteAsistencia;