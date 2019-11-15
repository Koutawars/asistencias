import React, { Component } from 'react';
import AsistenciaItem from '../Items/AsistenciaItem';

class ListaAsistencia extends Component {
    render() {
        return (
            <div className="row">
                <p className="blue-text"><em>Toda la información mostrada en esta página esta sujeta a revisión, verificación y corrección.</em></p>
                    
                <div className="center-align">
                    
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Nu</th>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Asistio</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.estudiantes.map(estudiante => {
                                return (
                                    <AsistenciaItem key={estudiante.codigo} estudiante={estudiante} />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListaAsistencia;