import React from 'react';
import DatePicker from 'react-date-picker';
import { TiEdit } from 'react-icons/ti';
import { MdDateRange } from 'react-icons/md';
import { FaPlaceOfWorship, FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io';
import SweetAlert from 'sweetalert2-react';

class ClaseForm extends React.Component {
    
    state = {
        show: false,
    }

    handleClick = (e) => {
        console.log("Button was clicked");
    };

    render() {
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
                        <div className="input-field">
                            <TiEdit className="prefix">Tematica</TiEdit>
                            <input 
                                className="form-control"
                                onChange={this.props.onChange} 
                                type="text" 
                                name="tema"
                                value={this.props.formValues.tema}
                            />
                            <label className="icon_prefix">Tema</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-field">
                            <MdDateRange className="prefix">Horario</MdDateRange>
                            <input 
                                className="form-control"
                                onChange={this.props.onChange} 
                                type="text" 
                                name="horario"
                                value={this.props.formValues.horario}
                            />
                            <label htmlFor="icon_prefix">Horario</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-field">
                            <FaPlaceOfWorship className="prefix">salon</FaPlaceOfWorship>
                            <input 
                                className="form-control"
                                onChange={this.props.onChange} 
                                type="text" 
                                name="salon"
                                value={this.props.formValues.salon}
                            />
                            <label htmlFor="icon_prefix">Salón</label>
                        </div>
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
