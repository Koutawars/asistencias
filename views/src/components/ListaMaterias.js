import React, { Component } from 'react';
import MateriaItem from './MateriaItem';

class ListaMaterias extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.materias.map(materia => {
                    return (
                        <MateriaItem key={materia.id} materia={materia} />
                    );
                })}
            </ul>
        );
    }
}

export default ListaMaterias;