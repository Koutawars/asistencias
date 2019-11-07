import React, { Component } from 'react';
import GrupoItem from '../components/GrupoItem';

class ListaGrupos extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.grupos.map(grupo => {
                    return (
                        <GrupoItem key={grupo.grupo} grupo={grupo} />
                    );
                })}
            </ul>
        );
    }
}

export default ListaGrupos;