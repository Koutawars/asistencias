import React from 'react';
import DatePicker from 'react-date-picker';
import { TiEdit } from 'react-icons/ti';
import { MdDateRange } from 'react-icons/md';
import { FaPlaceOfWorship, FaEye } from 'react-icons/fa'

class ClaseForm extends React.Component {
    
    handleClick = (e) => {
        console.log("Button was clicked");
    };

    render() {
        return (
        <div>
            <h1>Nueva Clase</h1>

            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <div class="input-field">
                        <DatePicker
                            className="form-control"
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.formValues.fecha}
                            name="fecha"
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <div class="input-field">
                        <TiEdit className="prefix">Tematica</TiEdit>
                        <input 
                            className="form-control"
                            onChange={this.props.onChange} 
                            type="text" 
                            name="salon"
                            value={this.props.formValues.tema}
                        />
                        <label for="icon_prefix">Tema</label>
                    </div>
                </div>

                <div className="form-group">
                    <div class="input-field">
                        <MdDateRange className="prefix">Horario</MdDateRange>
                        <input 
                            className="form-control"
                            onChange={this.props.onChange} 
                            type="text" 
                            name="horario"
                            value={this.props.formValues.horario}
                        />
                        <label for="icon_prefix">Horario</label>
                    </div>
                </div>

                <div className="form-group">
                    <div class="input-field">
                        <FaPlaceOfWorship className="prefix">salon</FaPlaceOfWorship>
                        <input 
                            className="form-control"
                            onChange={this.props.onChange} 
                            type="text" 
                            name="fecha"
                            value={this.props.formValues.salon}
                        />
                        <label for="icon_prefix">Salón</label>
                    </div>
                </div>

                <div className="form-group">
                    <div class="input-field">
                        <FaEye className="prefix">observaciones</FaEye>
                        <input 
                            className="form-control"
                            onChange={this.props.onChange} 
                            type="text" 
                            name="salon"
                            value={this.props.formValues.observacion}
                        />
                        <label for="icon_prefix">Observacion</label>
                    </div>
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>

            </form>
        </div>
        );
    }
}

export default ClaseForm;
