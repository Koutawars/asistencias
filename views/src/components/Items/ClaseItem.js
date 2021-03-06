import React, { Component } from 'react';
import Modelado1 from '../../images/modelado_1.jpeg';
import Modelado2 from '../../images/modelado_2.jpeg';
import {Link} from 'react-router-dom';
import { FaPlus, FaMinus, FaArrowAltCircleDown, FaPencilAlt } from 'react-icons/fa';
import { MdDelete, MdCheckCircle } from 'react-icons/md'
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css'

class ClaseItem extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            render: null,
        };
    }

    deleteHadle = (e) => {        
        const jwt = getJwt();
        const claseId = this.props.clase.id;
        axios.delete("http://" + window.location.hostname + ':5000/api/docente/' + claseId + '/deleteClase',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        },{}).then(res => {
            this.props.borrar(claseId);
            M.toast({html: "La clase se ha eliminado con exito!"})
        }).catch(err => {
            M.toast({html: "No se puede eliminar una clase con estudiantes, remitase a dirección de programa."})
        });
    }
    componentWillMount(){
        if(this.props.clase.id % 2 === 0)
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

        var editar = null;

        if(this.props.tipo_usuario == 1)
        {
            editar = <div className="card-action center-align">
                        <Link to={ { pathname: '/docente/academico/grupo/' + this.props.match.params.id  + '/' + this.props.clase.id + '/modificarClase'} }><FaPencilAlt className="green-text ">Editar</FaPencilAlt></Link >
                        <Link to={ { pathname: '/docente/academico/grupo/' + this.props.match.params.id  + '/' + this.props.clase.id + '/asistencia'} }><FaArrowAltCircleDown className="blue-text">Ver</FaArrowAltCircleDown></Link >
                        <Link  onClick = {this.deleteHadle}><MdDelete className="red-text ">Eliminar</MdDelete></Link >   
                    </div>
        }
        else
        {
            //Es estudiante

            var boton =  <MdDelete className="red-text"></MdDelete>
            
            if(this.props.clase.asistio == "SI")
            {
                boton = <MdCheckCircle className="green-text"></MdCheckCircle>
            }

            editar = <div className="card-action center-align">
                        {boton}
                    </div>
        }

        return (
            <div className="col s4">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" alt ="imagen" src={this.state.render} />
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"><b>Clase #{this.props.clase.id}</b><FaPlus className="right green-text">more_vert</FaPlus></span>
                        <p>Tema: <i className="blue-text">{this.props.clase.tema}</i></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><b>Clase #{this.props.clase.id}</b><FaMinus className="right red-text">close</FaMinus></span>
                        <p>
                            <b>Salón:</b> <i className="blue-text">{this.props.clase.salon}</i><br/>
                            <b>Horario:</b> <i className="blue-text">{this.props.clase.horario}</i><br/>
                            <b>Fecha:</b> <i className="blue-text">{this.props.clase.fecha}</i><br/>
                            <b>Observaciones:</b> <i className="blue-text">{this.props.clase.observacion}</i><br/>
                        </p>
                    </div>
                    
                    {editar}
                </div>
            </div>
        );
    }
}

export default withRouter(ClaseItem);