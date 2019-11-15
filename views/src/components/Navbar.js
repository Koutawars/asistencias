import React from 'react';
//import { Link } from 'react-router-dom';

//import logo from '../images/logo_unimag.png';

class Navbar extends React.Component {
  render() {
    return (
        <header role="banner">
            <div className="nav-bar">
                <div className="brand">
                    <div className="#0d47a1 blue darken-4 center-align">
                        <a href="https://www.unimagdalena.edu.co/UnidadesOrganizativas/Dependencia/2002" className="white-text">
                            <img src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/default.png" alt="Escudo de la Universidad del Magdalena" />
                            <p className="center-align white-text">Grupo de Admisiones, Registro y Control Académico <b>Unimagdalena</b></p>
                            <br/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Navbar;