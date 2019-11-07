import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="ver"> 
                <footer className="page-footer blue">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Universidad del Magdalena</h5>
                                <p className="grey-text text-lighten-4">

                                    Información de contacto

                                    Línea Gratuita Nacional: 01 8000 516060. PBX: (57 - 5) 4381000 EXT. 3221, 3139 y 3117 <br />
                                    Dirección: Carrera 32 No 22 - 08 Santa Marta D.T.C.H. - Colombia. <br />Código Postal No. 470004
                                    <br />Correo electrónico: admisiones@unimagdalena.edu.co

                                </p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Enlaces de interés</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Gobierno en Linea</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Ministerio de Educación</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Mecanismos de Control y Vigilancia</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Colombia aprende</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">                                 
                            La Universidad del Magdalena está sujeta a inspección y vigilancia por el Ministerio de Educación Nacional. 
                            <br/>
                            Universidad del Magdalena © 2018
                            <a className="grey-text text-lighten-4 right" href="#!">Más enlaces de interés</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;