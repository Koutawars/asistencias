import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getJwt} from '../helpers/jwt'
import M from 'materialize-css'
import "./../css/Login.css"

class Login extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            usuario: null,
            password: null
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login',  {
            usuario: this.state.usuario,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('jwt', res.data.jwt);
            this.props.history.push('/');
            this.setState({
                ...this.state,
                error: ""
            });
        }).catch((err) => {
            M.toast({html: "Nombre de usuario o contraseña incorrectos"})
        });
    }
    componentDidMount(){
        if(getJwt()){
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <div className="row ver">

                <div className="col s3"></div>

                <div className="card blue-grey lighten-5 container col s6 ">  
                    <div className="row card-title #0d47a1 blue darken-4">
                        <h4 className="center-align white-text">Login</h4>
                    </div>

                    <div className="row center-align">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="input-field col s12">
                                <input onChange = {this.handleChange} id="usuario" type="text" className="validate" />
                                <label htmlFor="usuario" className="black-text">Usuario</label>
                            </div>

                            <div className="input-field col s12">
                                <input onChange = {this.handleChange} id="password" type="password" className="validate" />
                                <label htmlFor="password" className="black-text">Contraseña</label>
                            </div>
                            
                            <button type="submit" className="waves-effect waves-light btn #0d47a1 blue darken-4 z-depth-4 btn btn-block">Entrar</button>

                        </form>
                    </div>

                    <div className="row center-align">
                        <Link to=""><i><u>Ha olvidado la contraseña?</u></i></Link>
                    </div>
                </div>

                <div className="col s3"></div>
            </div>
        );
    }
}
export default Login;