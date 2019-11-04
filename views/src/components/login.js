import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from '../helpers/jwt'
import M from 'materialize-css'

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
        axios.post('http://localhost:5000/login',  {
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
            M.toast({html: err.response.data.error})
        });
    }
    componentDidMount(){
        if(getJwt()){
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <div className="row">
                <h4>Login</h4>
                <form className="col s12" onSubmit = {this.handleSubmit} >
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange = {this.handleChange} id="usuario" type="text" class="validate" />
                            <label for="usuario">Usuario</label>
                        </div>
                        <div className="input-field col s12">
                            <input onChange = {this.handleChange} id="password" type="password" class="validate" />
                            <label for="password">Contraseña</label>
                        </div>
                        <button className="waves-effect waves-light btn">Entrar</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;