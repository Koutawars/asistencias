import React, { Component } from 'react';
import Modelado1 from '../images/modelado_1.jpeg';
import Modelado2 from '../images/modelado_2.jpeg';
import {Link} from 'react-router-dom';
import { FaPlus, FaMinus, FaArrowAltCircleDown, FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'

class ClaseItem extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            render: null,
        };
    }

    componentWillMount(){
        if(this.props.clase.clase % 2 === 0)
        {
            this.setState({
                ...this.state,
                render: Modelado1
            })
        }
        else
        {
            this.setState({
                ...this.state,
                render: Modelado2
            })
        }
    }

    render() {
        return (
            <div className="col s4">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt ="imagen" src={this.state.render} />
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"><b>Clase #{this.props.clase.clase}</b><FaPlus className="right green-text">more_vert</FaPlus></span>
                        <p>Tema: <i className="blue-text">{this.props.clase.tema}</i></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><b>Clase #{this.props.clase.clase}</b><FaMinus className="right red-text">close</FaMinus></span>
                        <p>
                            <b>Salón:</b> <i className="blue-text">{this.props.clase.salon}</i><br/>
                            <b>Horario:</b> <i className="blue-text">{this.props.clase.horario}</i><br/>
                            <b>Fecha:</b> <i className="blue-text">{this.props.clase.fecha}</i><br/>
                            <b>Estudiantes:</b> <i className="blue-text">{this.props.clase.n_estudiantes}</i><br/>
                            <b>Programa:</b> <i className="blue-text">{this.props.clase.programa}</i><br/>
                            <b>Observaciones:</b> <i className="blue-text">{this.props.clase.observacion}</i><br/>
                        </p>
                    </div>
                    <div className="card-action center-align">
                        <Link to={ { pathname: '/docente/academico/grupo/materia/asistencia'} }><FaPencilAlt className="green-text ">Editar</FaPencilAlt></Link >
                        <Link to={ { pathname: '/docente/academico/grupo/materia/asistencia'} }><FaArrowAltCircleDown className="blue-text">Ver</FaArrowAltCircleDown></Link >
                        <Link to={ { pathname: '/docente/academico/grupo/materia/asistencia'} }><MdDelete className="red-text ">Eliminar</MdDelete></Link >   
                    </div>

                </div>
            </div>
        );
    }
}

export default ClaseItem;