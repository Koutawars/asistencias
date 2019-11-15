import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import IconBook from '../../images/icon_book.png';
import { FaArrowAltCircleRight } from 'react-icons/fa';

/* Tome esta pag para el componente de lista de materia*/

class MateriaItem extends Component {

    /* Usar una variable para cambiando el pathname
        Si es estudiante -> /estudiante/academico/ + ? (No se como funciona el backend)
        Si es profesor -> /docente/academico/ + this.props.materia.id

        Usuario 1 -> Docente
        Usuario 2 -> Estudiante
    */

    render() {

        var path = null;

        if(this.props.tipo_usuario == 1)    //Docente
        {
            path = '/docente/academico/' + this.props.materia.id;   //Manda a la lista de grupos del docente
        }
        else if(this.props.tipo_usuario == 2)   //Estudiante
        {
            path = '/estudiante/academico/' + this.props.materia.id //Manda a la lista de clases del estudiante y la clase
        }

        return (
            <React.Fragment>
                <li className="collection-item avatar">
                    <img src={IconBook} alt="Icono materia" className="circle" />
                    <span className="title"><b><h5>{this.props.materia.nombre}</h5></b></span>
                    <Link to={ { pathname: path, state: {materia: this.props.materia, tipo_usuario: this.props.tipo_usuario} } } className="secondary-content"><i className="material-icons"><FaArrowAltCircleRight/><br/></i></Link>
                </li>
            </React.Fragment>
        );
    }
}

export default MateriaItem;
