import React from 'react';
import { TiEdit } from 'react-icons/ti';
import { MdDateRange } from 'react-icons/md';
import { FaEye } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io';
import SweetAlert from 'sweetalert2-react';
import { withRouter } from 'react-router-dom';


import { getJwt } from '../helpers/jwt';
import axios from 'axios';

import M from 'materialize-css'

class ClaseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            horarios:[]
        }
    }
    componentDidMount(){
        const jwt = getJwt();
        const grupoId = this.props.match.params.id;
        let url = "http://localhost:5000/api/docente/" + grupoId + "/getHorarios";
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            this.setState({
                ...this.state,
                horarios: res.data.horarios
            })
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        });
    }

    
    componentDidUpdate(prev_props, prev_state){
        if(this.state.horarios.length != prev_state.horarios.length){
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
            var eleme = document.querySelectorAll('.datepicker');
            M.Datepicker.init(eleme, {});
        }
    }
    render() {
        var opciones = this.state.horarios.map((horario) => {
            return <option key = {horario.id} value={horario.id}>{horario.salon} - {horario.horaInicial} a {horario.horaFinal}</option>
        })
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
                        <input name= "fecha" id="fecha" type="text" className="datepicker">
                        </input>
                        <label htmlFor="fecha">Fecha de la clase</label>
                    </div>
                    <div className="input-field col s12">
                        <MdDateRange className="prefix">Horario</MdDateRange>
                        <select id="horario" name="horarioId" defaultValue={'DEFAULT'} onChange={this.props.onChange} >
                        <option value="DEFAULT" disabled>Escoja horario y clase</option>
                        {opciones}
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
                                value={this.props.formValues.observaciones}
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
                            text="La clase de esta creando, espere por favor..."
                            onConfirm={() => this.setState({ ...this.state, show: false })}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(ClaseForm);
