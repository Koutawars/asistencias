import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import IconBook from '../images/icon_book.png';
import { FaArrowAltCircleRight } from 'react-icons/fa';

/* Tome esta pag para el componente de lista de materia*/

class MateriaDocente extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="collection-item avatar">
                    <img src={IconBook} alt="Icono materia" className="circle" />
                    <span className="title"><b>{this.props.materia.nombre}</b></span>
                    <p className="blue-grey-text">Codigo CNI: {this.props.materia.codigo_cni}<br />
                        Programa: {this.props.materia.programa}
                    </p>
                    <Link to={ { pathname: '/docente/academico/grupo',state: {info: this.props.materia} } } className="secondary-content"><i className="material-icons"><FaArrowAltCircleRight/><br/></i></Link>
                </li>
            </React.Fragment>
        );
    }
}

export default MateriaDocente;
