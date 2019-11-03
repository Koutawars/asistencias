import React, {Component} from 'react';
import { getJwt } from './../helpers/jwt'
import axios from 'axios'
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario:undefined
        }
    }
    componentDidMount() {
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/login');
        }
        axios.get('http://localhost:5000/getUser', 
        {headers:{Authorization: `Bearer ${jwt}`}} )
        .then(res => this.setState({
            usuario: res.data.usuario
        })).catch(err => {
            localStorage.removeItem('jwt');
            this.props.history.push('/login');
        });
    }
    render(){
        if(this.state.usuario === undefined){
            return(<h1>Cargando ...</h1>)
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default withRouter(AuthenticatedComponent);