import React, { Component } from 'react'
import {NavLink, withRouter} from "react-router-dom"

class NavbarLog extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
      }
    logOut= (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/");
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper grey">
                    <ul>
                        <li className={this.getNavLinkClass("/")}><NavLink to ="/docente">Inicio</NavLink></li>
                        <li className={this.getNavLinkClass("/docente/academico")}><NavLink to ="/docente/academico">Academico</NavLink></li>
                        <li className="right"><a href="/" onClick = {this.logOut}>Cerrar sesión</a></li>
                        <li className="right">{this.props.id} - {this.props.firstName} {this.props.lastName}</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(NavbarLog);