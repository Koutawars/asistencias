import React, { Component } from 'react'
import {NavLink, withRouter} from "react-router-dom"

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    logOut= (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/login");
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to ="/">Inicio</NavLink></li>
                    <li><NavLink to ="/materias">Académico</NavLink></li>
                    <li><a href="/login" onClick = {this.logOut}>Cerrar sesión</a></li>
                </ul>
            </nav>
        )
    }
}
export default withRouter(NavBar);