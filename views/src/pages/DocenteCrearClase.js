import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ClaseForm from '../components/ClaseForm';
//import '../js/datepicker.js';

class DocenteCrearClase extends Component {

    state = {form: {
        fecha: new Date(),
        tema: '',
        observacion: '',
        horario: '',
        salon: '',
      } };

      handleChange = (e) => {
        this.setState(
          {
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            }
          }
        );
    
        console.log(this.state.form);
      };
    
      handleSubmit = (e) => 
      {
        e.preventDefault();
        //this.setState({loading: true, error:null})
        //this.setState({loading:false})
        
        //this.props.history.push('/badges');
        try {
          //await api.badges.create(this.state.form)
        } catch (error) {
          //this.setState({loading: false, error:error})
        }
      }

    render() {
        return (
            <React.Fragment>
                <NavbarLog id="999" firstName="Johan" lastName="Robles"></NavbarLog>

                <div className="container">
                    <ClaseForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} materia={this.props.location.state.materia}/>
                </div>
            </React.Fragment>
        );
    }
}

export default DocenteCrearClase;