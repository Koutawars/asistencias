import React, { Component } from 'react';
import { TiEdit } from 'react-icons/ti';
import { MdDateRange } from 'react-icons/md';
import { FaCalendarDay } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io';
import SweetAlert from 'sweetalert2-react';
import { withRouter } from 'react-router-dom';

class ClaseFormModificar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <button style={{marginTop : "30px"}} onClick={(e) => {this.props.history.goBack()}} className="btn right">Atras</button>
                    
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
                                        placeholder={this.props.formValues.tema}
                                    />
                                    <label className="icon_prefix">Tema</label>
                                </div>
                            </div>
                            <div className="input-field">
                                <FaCalendarDay className="prefix">Tematica</FaCalendarDay>
                                <input name= "fecha" id="fecha" type="text" className="datepicker">
                                </input>
                                <label htmlFor="fecha">Fecha de la clase</label>
                            </div>
                            <div className="input-field col s12">
                                <MdDateRange className="prefix">Horario</MdDateRange>
                                <select id="horario" name="horarioId" defaultValue={'DEFAULT'} onChange={this.props.onChange} >
                                <option value="DEFAULT" disabled>Escoja horario y clase</option>
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
                                        name="observaciones"
                                        placeholder={this.props.formValues.observaciones}
                                    />
                                    <label htmlFor="icon_prefix">Observacion</label>
                                </div>
                            </div>

                            <div className="col s6 left-align">
                                <button onClick={() => this.setState({ ...this.state, show: true })} className="btn btn-primary left-align"><IoMdDownload>Guardar</IoMdDownload> Guardar</button>
                                <SweetAlert
                                    show={this.state.show}
                                    title="Guardando"
                                    type="success"
                                    text="La clase se esta modificando, espere por favor..."
                                    onConfirm={() => this.setState({ ...this.state, show: false })}
                                />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClaseFormModificar;