import React, { Component } from 'react';
import IconGroup from '../images/icon_group.png';
import {Link} from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class GrupoItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="collection-item avatar">
                    <img src={IconGroup} alt="Icono grupo" className="circle" />
                    <span className="title"><b>Grupo #{this.props.grupo.grupo}</b></span>
                    <p className="blue-grey-text">Horario: {this.props.grupo.horario}<br />
                        Salon: {this.props.grupo.salon}
                        <br />
                        Estudiantes: {this.props.grupo.n_estudiantes}
                    </p>
                    <Link to={ { pathname: '/', state: {info: this.props.group} } } className="secondary-content"><i className="material-icons"><FaArrowAltCircleRight/><br/></i></Link>
                </li>
            </React.Fragment>
        );
    }
}

export default GrupoItem;