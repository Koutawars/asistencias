import React, { Component } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import ListaClases from '../../components/Listas/ListaClases';
import NavbarLog from '../../components/NavbarLog';
import { Link } from 'react-router-dom';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class EstudianteMateriaClase extends Component {

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
            default:
                retorna = "";
                break;
        }
        return retorna;

    }

    componentDidMount(){
        const jwt = getJwt();
        console.log("DATA: ", this.props)
        const grupoId = 0

        let url = "http://" + window.location.hostname + ":5000/api/estudiante/" + grupoId + "/getClases";
        console.log(url);
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

    borrar = (id) => {
        var aux = this.state.clases;
        var index = aux.map(x => {
            return x.id;
          }).indexOf(id);
          
          aux.splice(index, 1);
          this.setState({
            ...this.state,
            clases: aux
          });
    }

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
                </div>
            </React.Fragment>
        );
    }
}

export default EstudianteMateriaClase;