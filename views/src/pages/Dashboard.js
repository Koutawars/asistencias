import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import '../css/Docente.css';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: null,
            tipoId: null,
            nombre: null,
            codigo: null,
            documento: null,
            email: null,
            ruta_imagen: 'https://www.lacucurucha.com.ar/circuito/images/usuario.jpeg',
        };
    }
    componentDidMount(){
        const jwt = getJwt();
        let url = "http://localhost:5000/api/getUser";
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            this.setState({
                ...res.data.usuario
            });
            console.log(res.data.usuario);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const info = this.state;
        var codigo = (info.codigo)?<th>Código</th>:<th></th>;
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                
                <div className="container">
                    <h4 className="left-align">
                        <span>Datos Personales</span>
                    </h4>

                    <div className="divider"></div>

                    <div className="section">
                        <div className="row">
                            <p className="blue-text"><em>Toda la información mostrada en esta página esta sujeta a revisión, verificación y corrección.</em></p>
                                
                            <div className="center-align">
                                
                                <table className="striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Documento</th>
                                            <th>Email institucional</th>
                                            {codigo}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{info.nombre}</td>
                                            <td>{info.documento}</td>
                                            <td>{info.email}</td>
                                            <td>{info.codigo}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;