import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo_unimag.png';

class Navbar extends React.Component {
  render() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue">
                    <div className="row">
                        <div className="col s7 push-s5"><span>Grupo de control y registro academico</span></div>
                        <div className="col s5 pull-s7"><span className="flow-text">Logo</span></div>
                    </div>
                </div>
            </nav>
        </div>
      
            
    );
  }
}

export default Navbar;