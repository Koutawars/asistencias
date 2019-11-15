import React, { Component } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import {IoIosCloseCircle} from 'react-icons/io'
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { getJwt } from '../../helpers/jwt';


class AsistenciaItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            asistio: ''
        }
    }
    handleChange = (e) => {
        if(e.target.checked){
            // http://localhost:5000/api/docente/:id/:idEstudiante/addEstudianteClase
            var claseId = this.props.match.params.claseId;
            var estudianteId = this.props.estudiante.id;
            const jwt = getJwt();
            let url = "http://" + window.location.hostname + ":5000/api/docente/" + claseId + "/" + estudianteId + "/addEstudianteClase";
            axios.post(url, {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            } )
            .then(res => {
                console.log("poner");
                console.log("DATA: ", res.data);
            }).catch(err => {
                console.log(err);
            });
        }else{
            // http://localhost:5000/api/docente/:id/:idEstudiante/deleteEstudianteClase
            var claseId = this.props.match.params.claseId;
            var estudianteId = this.props.estudiante.id;
            const jwt = getJwt();
            let url = "http://" + window.location.hostname + ":5000/api/docente/" + claseId + "/" + estudianteId + "/deleteEstudianteClase";
            axios.post(url, {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            } )
            .then(res => {
                console.log("quitar");
                console.log("DATA: ", res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }
    componentWillMount(){
        const info = this.props.estudiante;
        this.setState({
            asistio: info.asistio
        })
    }

    componentWillReceiveProps(nextProps, nextContext){
        var asistio = nextProps.estudiante.asistio;
        if(asistio == 'NO'){
            console.log(document.querySelectorAll("#checkbo")[0]);
            document.querySelectorAll("#checkbo")[0].checked = false;
        }else {
            console.log(document.querySelectorAll("#checkbo")[0]);
            document.querySelectorAll("#checkbo")[0].checked = true;
        }
    }
    render() {
        const info = this.props.estudiante;
        var layer = <div className="switch">
            <label>
                <IoIosCloseCircle className="red-text"></IoIosCloseCircle>
                <input id="checkbo" onChange={this.handleChange} type="checkbox" />
                <span className="lever"></span>
                <MdCheckCircle className="green-text"></MdCheckCircle>
            </label>
        </div>;

        return (
            <React.Fragment>
                <tr>
                    <td>{info.id}</td>
                    <td>{info.codigo}</td>
                    <td>{info.nombre}</td>
                    <td>
                        {layer}
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default withRouter(AsistenciaItem);