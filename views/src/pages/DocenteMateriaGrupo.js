import React, { Component } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import ListaClases from '../components/ListaClases';
import NavbarLog from '../components/NavbarLog';
import { Link, withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';

class DocenteMateriaGrupo extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            clases: [
                {
                    id: 1,
                    horario: 'Viernes 8-12',
                    salon: 'Modelado',
                    fecha: '13/09/2019',
                    tema: 'Arquitecto vs Diseñador',
                    observacion: 'Para la proxima clase hay que hacer un video sobre las diferencias...'
                }
            ]
        }
    }
    componentDidMount(){
        const jwt = getJwt();
        const grupoId = this.props.match.params.id;
        let url = "http://localhost:5000/api/docente/" + grupoId + "/getClases";
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            var clases = [];
            res.data.clase.forEach(clase => {
                

            });
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <div className="row">
                        <h4 className="left-align">Clases</h4>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <FaSearch className="prefix"/>
                                        <input type="text" className="form-control" />
                                        <label >Buscar por tema, grupo, salon...</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <ListaClases clases={this.state.clases} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed-action-btn">
                        <Link className="btn-floating btn-large green" to={ { pathname: '/docente/academico/grupo/materia/crear_clase' } }>
                            <FaPlus className="center-align">plus</FaPlus>
                        </Link>
                    </div>
                        
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteMateriaGrupo);