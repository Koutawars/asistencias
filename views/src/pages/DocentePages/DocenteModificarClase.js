import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';

import ClaseFormModificar from '../../components/Forms/ClaseFormModificar';

class DocenteModificarClase extends Component {
    
    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <ClaseFormModificar />
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteModificarClase;