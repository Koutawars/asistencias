import React, {Component} from 'react';
import axios from 'axios';
import {getJwt} from '../helpers/jwt'

class Login extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            usuario: null,
            password: null,
            error: null
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
            this.setState({
                ...this.state,
                error: err.response.data.error
            })
        });
    }
    componentDidMount(){
        if(getJwt()){
            this.props.history.push('/');
        }
    }
    render(){
        let error = this.state.error ? (<div className = "error">{this.state.error}</div>): <div></div>;
        return (
            <div>
                <h4>LOGIN</h4>
                <form onSubmit = {this.handleSubmit}>
                    {error}
                    <label htmlFor = "usuario">Usuario: </label>
                    <input type = "text" id ="usuario" onChange = {this.handleChange} />
                    <label htmlFor = "password">Contraseña: </label>
                    <input type = "password" id ="password" onChange = {this.handleChange} />
                    <button>Entrar</button>
                </form>
            </div>
        );
    }
}
export default Login;