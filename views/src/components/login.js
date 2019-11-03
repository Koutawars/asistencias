import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    State = {
        usuario: null,
        password: null
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/login',  {
            usuario: this.state.usuario,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('jwt', res.data.jwt);
            this.props.history.push('/');
        });
    }
    render(){
        return (
            <div>
                <h4>LOGIN</h4>
                <form onSubmit = {this.handleSubmit}>
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