import React from 'react';
import DatePicker from 'react-date-picker';
import { TiEdit } from 'react-icons/ti';
import { MdDateRange } from 'react-icons/md';
import { FaPlaceOfWorship, FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io';
import SweetAlert from 'sweetalert2-react';

import M from 'materialize-css'

class ClaseForm extends React.Component {
    
    state = {
        show: false,
    }

    handleClick = (e) => {
        console.log("Button was clicked");
    };

    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var eleme = document.querySelectorAll('.datepicker');
            M.Datepicker.init(eleme, {});

            M.FormSelect.init(elems, {});
        });
        return (
        <div className="container">

            <div className="center-align">
                <h4>Nueva clase</h4>
                <h5>Materia: {this.props.materia}</h5>
            </div>

            <div className="divider"></div>

            <div className="section">
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <div className="input-field">
                            <TiEdit className="prefix">Tematica</TiEdit>
                            <input 
                                className="form-control"
                                onChange={this.props.onChange} 
                                type="text" 
                                name="tema"
                            />
                            <label className="icon_prefix">Tema</label>
                        </div>
                    </div>
                    <div className="input-field">
                        <input onChange={this.props.onChange} id="fecha" type="text" class="datepicker">
                        </input>
                        <label for="fecha">Fecha de la clase</label>
                    </div>
                    <div class="input-field col s12">
                        <MdDateRange className="prefix">Horario</MdDateRange>
                        <select onChange={this.props.onChange} >
                        <option value="" disabled selected>Escoja horario y clase</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                        <label>Horario</label>
                    </div>

                    <div className="form-group">
                        <div className="input-field">
                            <FaEye className="prefix">observaciones</FaEye>
                            <input 
                                className="form-control"
                                onChange={this.props.onChange} 
                                type="text" 
                                name="observacion"
                                value={this.props.formValues.observacion}
                            />
                            <label htmlFor="icon_prefix">Observacion</label>
                        </div>
                    </div>

                    <div className="col s6 left-align">
                        <button onClick={() => this.setState({ show: true })} className="btn btn-primary left-align"><IoMdDownload>Guardar</IoMdDownload> Guardar</button>
                        <SweetAlert
                            show={this.state.show}
                            title="Guardando"
                            type="success"
                            text="La clase de esta creando, espere por favor..."
                            onConfirm={() => this.setState({ show: false })}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
        );
    }
}

export default ClaseForm;
