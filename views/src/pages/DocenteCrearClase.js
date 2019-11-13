import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ClaseForm from '../components/ClaseForm';
//import '../js/datepicker.js';

class DocenteCrearClase extends Component {

    state = {
      form: {
        fecha: new Date(),
        tema: '',
        observacion: '',
        horario: '',
        salon: '',
        horarioId: null
      }
    };

      handleChange = (e) => {

        var name = null;
        var value = null;

        if(e.toString() != '[object Object]')
        {
          name = 'fecha';
          value = e;
          console.log(e);
        }
        else
        {
          name = e.target.name;
          value = e.target.value;
        }

        this.setState(
          {
            form: {
              ...this.state.form,
              [name]: value,
            }
          }
        );
    
        console.log(this.state.form);
      };
    
      handleSubmit = (e) => 
      {
        e.preventDefault();
        console.log(this.state);
      }

    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <ClaseForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form}/>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteCrearClase;