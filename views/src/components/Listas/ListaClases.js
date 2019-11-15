import React, { Component } from 'react';
import ClaseItem from '../Items/ClaseItem';

class ListaClases extends Component {
    render() {
        return (
            <div className="row">
                {this.props.clases.map(clase => {
                    return (
                        <ClaseItem key={clase.id} clase={clase} borrar = {this.props.borrar}/>
                    );
                })}
            </div>
        );
    }
}

export default ListaClases;