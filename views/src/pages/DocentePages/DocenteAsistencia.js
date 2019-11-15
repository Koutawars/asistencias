import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import ListaAsistencia from '../../components/Listas/ListaAsistencia';
import { IoIosArrowBack } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

/*
    Boton de descargas -> Por si lo necesitamos eventualmente

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
*/

class DocenteAsistencia extends Component {

    state = {
        show: false,
    }

    componentDidMount(){
        const jwt = getJwt();
        const grupoId = this.props.match.params.id;
        const claseId = this.props.match.params.claseId;
        let url = "http://localhost:5000/api/docente/" + grupoId + "/getEstudiantes";
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            console.log(res.data);
            let estudian = res.data.estudiantes.map(e => {
                e.asistio = 'NO';
                return e;
            })
            this.setState({
                ...this.state,
                estudiantes:estudian
            })
            axios.get('http://localhost:5000/api/docente/' + claseId +'/getEstudiantesClases',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    }
                } )
                .then((respuesta => {
                    let estudiantes = this.state.estudiantes;
                    estudiantes = estudiantes.map(e => {
                        respuesta.data.estudiantes.forEach(cos => {
                            if(cos.id === e.id){
                                e.asistio = 'SI';
                            }
                        })
                        return e;
                    })
                    this.setState({
                        ...this.state,
                        estudiantes
                    })
                    console.log(estudiantes);
                })).catch(err => {
                    console.log(err);
                });
        }).catch(err => {
            console.log(err);
        });
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
                    asistio:'SI'
                }
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
                    </div>

                    <div className="divider"></div>

                    <div className="section">

                        <ListaAsistencia estudiantes={this.state.estudiantes} className="center-align"/>
                        
                        <div className="row">
                            <div className="col s6 left-align">
                                <button onClick={this.handleClick} className="btn btn-primary left-align"><IoIosArrowBack>Back</IoIosArrowBack> Atrás</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteAsistencia);