import React, { Component } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import ListaClases from '../../components/Listas/ListaClases';
import NavbarLog from '../../components/NavbarLog';
import { Link } from 'react-router-dom';
//import { getJwt } from '../../helpers/jwt';
//import axios from 'axios';

class EstudianteMateriaClase extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <div className="row">
                        <h4 className="left-align left" >Clases</h4>
                        <button style={{marginTop : "30px"}} onClick={(e) => {this.props.history.goBack()}} className="btn right #0d47a1 blue darken-4">Atras</button>
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
                                    <ListaClases clases={this.state.clases} borrar = {this.borrar} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed-action-btn">
                        <Link className="btn-floating btn-large #536dfe indigo accent-2" to={ { pathname: '/docente/academico/grupo/' + this.props.match.params.id + '/crearClase' } }>
                            <FaPlus className="center-align">plus</FaPlus>
                        </Link>
                    </div>
                        
                </div>
            </React.Fragment>
        );
    }
}

export default EstudianteMateriaClase;