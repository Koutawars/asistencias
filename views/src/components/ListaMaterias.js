import React, { Component } from 'react';
import MateriaDocente from './MateriaDocente';

class ListaMaterias extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.materias.map(materia => {
                    return (
                        <MateriaDocente key={materia.id} materia={materia} />
                    );
                })}
            </ul>
        );
    }
}

export default ListaMaterias;