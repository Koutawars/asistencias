import React, { Component } from 'react';
import IconGroup from '../../images/icon_group.png';
import {Link} from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class GrupoItem extends Component {
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
    render() {
        return (
            <React.Fragment>
                <li className="collection-item avatar">
                    <img src={IconGroup} alt="Icono grupo" className="circle" />
                    <span className="title"><b>Grupo #{this.props.grupo.numero}</b></span>
                    {this.props.grupo.Horario_grupos.map(h => {
                        return (
                            <p key ={h.id} className="blue-grey-text">
                                En {h.Horario.salon} de {h.Horario.horaInicial} a {h.Horario.horaFinal}, el {this.getDia(h.Horario.dia)} <br />
                            </p>
                        );
                    })}
                    <Link to={`/docente/academico/grupo/` + this.props.grupo.id} className="secondary-content"><i className="material-icons"><FaArrowAltCircleRight/><br/></i></Link>
                </li>
            </React.Fragment>
        );
    }
}

export default GrupoItem;