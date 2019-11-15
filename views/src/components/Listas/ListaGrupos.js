import React, { Component } from 'react';
import GrupoItem from '../Items/GrupoItem';

class ListaGrupos extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.grupos.map(grupo => {
                    return (
                        <GrupoItem key={grupo.id} grupo = {grupo}/>
                    );
                })}
            </ul>
        );
    }
}

export default ListaGrupos;