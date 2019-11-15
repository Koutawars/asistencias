import React, { Component } from 'react';

import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

import NavbarLog from '../../components/NavbarLog';
import ListaMaterias from '../../components/Listas/ListaMaterias';

// import { getJwt } from '../../helpers/jwt';
// import axios from 'axios';

/*
    Esta vista es para mostrar las materias del estudiante que es tipo de usuario 2 (Verificar con BD)
    
    Le paso el tipo de usuario a ListaMaterias porque en el componente lo reutilizo cambiandole el 
    path dependiendo el tipo de usuario
*/

class EstudianteAcademico extends Component {
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
        let url = "http://" + window.location.hostname + ":5000/api/estudiante/getMaterias";//obtener materias de estudiante con id del que pide
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

        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <h4 className="left-align">
                    <span>Asignaturas</span>
                </h4>

                <div className="divider"></div>

                <div className="section">
                    <div className="container center-align">
                        <ListaMaterias materias={info.materias} tipo_usuario={2}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default EstudianteAcademico;