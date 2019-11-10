import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import IconBook from '../images/icon_book.png';
import { FaArrowAltCircleRight } from 'react-icons/fa';

/* Tome esta pag para el componente de lista de materia*/

class MateriaItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="collection-item avatar">
                    <img src={IconBook} alt="Icono materia" className="circle" />
                    <span className="title"><b><h5>{this.props.materia.nombre}</h5></b></span>
                    <Link to={ { pathname: `/docente/academico/` + this.props.materia.id, state: {materia: this.props.materia} } } className="secondary-content"><i className="material-icons"><FaArrowAltCircleRight/><br/></i></Link>
                </li>
            </React.Fragment>
        );
    }
}

export default MateriaItem;
