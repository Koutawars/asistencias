import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ClaseForm from '../components/ClaseForm';

//import '../js/datepicker.js';

class DocenteCrearClase extends Component {

    state = {
      fecha: '',
      tema: '',
      observacion: '',
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
        console.log(this.state);
      }

    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                <div className="container">
                    <ClaseForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state}/>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteCrearClase;