import React, { Component } from 'react';
import MateriaItem from '../Items/MateriaItem';

/*
    Paso el tipo de usuario a Materia item para cambiar el path a donde lo voy a enviar
*/

class ListaMaterias extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.materias.map(materia => {
                    return (
                        <MateriaItem key={materia.id} materia={materia} tipo_usuario={this.props.tipo_usuario} />
                    );
                })}
            </ul>
        );
    }
}

export default ListaMaterias;