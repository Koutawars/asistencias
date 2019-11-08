import React, { Component } from 'react';
import Modelado1 from '../images/modelado_1.jpeg';
import Modelado2 from '../images/modelado_2.jpeg';
import {Link} from 'react-router-dom';
import { FaPlus, FaMinus, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti';

class ClaseItem extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            render: null,
        };
    }

    render() {

        if(this.props.clase.clase % 2 == 0)
        {
            this.state.render = Modelado1;   
        }
        else
        {
            this.state.render = Modelado2;
        }

        return (
            <div className="col s4">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.state.render} />
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
                        </p>
                    </div>
                    <div className="card-action center-align">
                        <Link ><TiEdit className="green-text ">Editar</TiEdit></Link >
                        <Link ><FaEye className="blue-text ">Ver</FaEye></Link >
                        <Link ><MdDelete className="red-text ">Eliminar</MdDelete></Link >   
                    </div>

                </div>
            </div>
        );
    }
}

export default ClaseItem;