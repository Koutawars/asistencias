import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ListaAsistencia from '../components/ListaAsistencia';
import { IoIosArrowBack, IoMdDownload } from 'react-icons/io';
import SweetAlert from 'sweetalert2-react';

class DocenteAsistencia extends Component {

    state = {
        show: false,
    }

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

    handleClick = (e) => {
        this.props.history.goBack();
    }

    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>

                <div className="container">
                    <div className="center-align">
                        <h4>Lista de asistencia</h4>
                        <h5>{this.props.location.state.materia}</h5>
                        <h5>Clase #{this.props.location.state.n_clase}</h5>
                    </div>

                    <div className="divider"></div>

                    <div className="section">

                        <ListaAsistencia estudiantes={this.state.estudiantes} className="center-align"/>
                        
                        <div className="row">
                            <div className="col s6 left-align">
                                <button onClick={this.handleClick} className="btn btn-primary left-align"><IoIosArrowBack>Back</IoIosArrowBack> Atrás</button>
                            </div>
                            
                            <div className="col s6 right-align">
                                <button onClick={() => this.setState({ show: true })} className="btn btn-primary left-align"><IoMdDownload>Descargar</IoMdDownload> Descargar</button>
                                <SweetAlert
                                    show={this.state.show}
                                    title="Lista de asistencia"
                                    type="success"
                                    text="El documento se descargara en breve..."
                                    onConfirm={() => this.setState({ show: false })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteAsistencia;