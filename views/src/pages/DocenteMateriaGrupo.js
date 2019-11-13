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
            clases: []
        }
    }
    getDia(dia){
        var retorna;
        switch(dia){
            case 1:
                retorna = "Lunes";
                break;
            case 2:
                retorna = "Martes";
                break;
            case 3:
                retorna = "Miercoles";
                break;
            case 4:
                retorna = "Jueves";
                break;
            case 5:
                retorna = "Viernes";
                break;
            case 6:
                retorna = "Sabado";
                break;
            case 7:
                retorna = "Domingo";
                break;
        }
        return retorna;

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
                let horaInicial, horaFinal;
                horaInicial = clase.Horario.horaInicial.split(":")[0];
                horaFinal = clase.Horario.horaFinal.split(":")[0];
                clases.push({
                    id: clase.id,
                    horario: this.getDia(clase.Horario.dia) + " " +  horaInicial + "-" + horaFinal,
                    tema: clase.tema,
                    observacion: clase.observaciones,
                    fecha: clase.fecha,
                    salon: clase.Horario.salon
                })
            });
            this.setState({
                clases
            })
            console.log(clases);
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
                        <Link className="btn-floating btn-large green" to={ { pathname: '/docente/academico/grupo/' + this.props.match.params.id + '/crearClase' } }>
                            <FaPlus className="center-align">plus</FaPlus>
                        </Link>
                    </div>
                        
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteMateriaGrupo);