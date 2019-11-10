import React, { Component } from 'react';
import ClaseItem from '../components/ClaseItem';

class ListaClases extends Component {
    render() {
        return (
            <div className="row">
                {this.props.clases.map(clase => {
                    return (
                        <ClaseItem key={clase.clase} clase={clase} materia={this.props.materia}/>
                    );
                })}
            </div>
        );
    }
}

export default ListaClases;