import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import ListaMaterias from '../../components/Listas/ListaMaterias';

import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class Docente extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            ruta_imagen: 'https://www.lacucurucha.com.ar/circuito/images/usuario.jpeg',
                materias: []
        };
    }

    componentDidMount(){
        const jwt = getJwt();
        let url = "http://" + window.location.hostname + ":5000/api/docente/getMaterias";//obtener materias de estudiante con id del que pide
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            this.setState({
                materias: res.data.materias
            });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        const info = this.state;
        console.log(this.state);
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <h4 className="left-align">
                    <span>Asignaturas</span>
                </h4>

                <div className="divider"></div>

                <div className="section">
                    <div className="container center-align">
                        <ListaMaterias materias={info.materias} tipo_usuario={1}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default Docente;