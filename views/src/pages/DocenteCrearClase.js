import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ClaseForm from '../components/ClaseForm';
import { getJwt } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

//import '../js/datepicker.js';

class DocenteCrearClase extends Component {

    state = {
      fecha: '',
      tema: '',
      observaciones: '',
      horarioId: null
    };

    fechaListener = (event) => {
      var element = event.target;
      if(element.classList.contains("datepicker-done")){
        var datepickerValue = document.querySelectorAll('#fecha')[0].value;
        datepickerValue = new Date(datepickerValue).toISOString().split("T")[0];
        this.setState({ 
          ...this.state,
          fecha: datepickerValue 
        });
        console.log(this.state)
      }
    }
    
    componentDidMount(){
      document.addEventListener( "click", this.fechaListener );
    }
      handleChange = (e) => {
        var name = null;
        var value = null;
        name = e.target.name;
        value = e.target.value;
        this.setState(
          {
            ...this.state,
            [name]: value
          }
        );
      };
    
      handleSubmit = (e) => 
      {
        e.preventDefault();
        const jwt = getJwt();
        const grupoId = this.props.match.params.id;
        let url = "http://localhost:5000/api/docente/" + grupoId + "/addclase";
        axios.post(url, this.state,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            console.log("DATA: ", res.data);
        }).catch(err => {
            console.log(err);
        });
      }

    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <ClaseForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state} />
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteCrearClase);