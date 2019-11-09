import React, { Component } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import {IoIosCloseCircle} from 'react-icons/io'

class AsistenciaItem extends Component {
    render() {

        const info = this.props.estudiante;
        var layer = <MdCheckCircle className="green-text"></MdCheckCircle>;

        if(info.asistio == 'NO')
        {
            layer = <IoIosCloseCircle className="red-text"></IoIosCloseCircle>;
        }

        return (
            <React.Fragment>
                <tr>
                    <td>{info.id}</td>

                    <td>{info.codigo}</td>

                    <td>{info.nombre} {info.apellido}</td>

                    <td>
                        {layer}
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default AsistenciaItem;