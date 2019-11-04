import React, { Component } from 'react'
import {NavLink, withRouter} from "react-router-dom"

class NavBar extends Component {
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
        this.props.history.push("/login");
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul>
                        <li className={this.getNavLinkClass("/")}><NavLink to ="/">Inicio</NavLink></li>
                        <li className={this.getNavLinkClass("/materias")}><NavLink to ="/materias">Académico</NavLink></li>
                        <li className="right"><a href="/login" onClick = {this.logOut}>Cerrar sesión</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(NavBar);