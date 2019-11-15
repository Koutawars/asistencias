import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import { getJwt } from '../../helpers/jwt';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ClaseForm from '../../components/Forms/ClaseForm';

class DocenteModificarClase extends Component {
    
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
        const claseId = this.props.match.params.claseId;
        let url = "http://" + window.location.hostname + ":5000/api/docente/" + grupoId + "/" + claseId +  "/updateClase";
        axios.post(url, this.state,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            console.log("DATA: ", res.data);
            this.props.history.goBack();
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

export default withRouter(DocenteModificarClase);