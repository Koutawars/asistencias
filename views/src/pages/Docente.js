import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import '../css/Docente.css';

class Docente extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            nombre: 'Johan',
            apellido: 'Robles',
            documento: '1016094022',
            celular: '3003393659',
            fecha_n: '13/05/84',
            email_i: 'johan@unimagdalena.edu.co',
            ciudad_o: 'Santa Marta',
            direccion: 'Cienaga calle #4',
            colegio: 'Instituto la esperanza',
            anio_decimo: '1994',
            pension_decimo: '50000 $',
            ruta_imagen: 'https://www.lacucurucha.com.ar/circuito/images/usuario.jpeg',
        };
    }

    render() {
        const info = this.state;
        return (
            
            <React.Fragment>
                <NavbarLog id="999" firstName="Johan" lastName="Robles"></NavbarLog>
                
                <div className="container">
                    <h4 className="left-align">
                        <span>Datos Personales</span>
                    </h4>

                    <div className="divider"></div>

                    <div className="section">
                        <div className="row">
                            <p className="blue-text"><em>Toda la información mostrada en esta página esta sujeta a revisión, verificación y corrección.</em></p>
                                
                            <div className="center-align">
                                
                                <table className="striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Documento</th>
                                            <th>Celular</th>
                                            <th>Fecha de Nacimiento</th>
                                            <th>Email institucional</th>
                                            <th>Ciudad de origen</th>
                                            <th>Dirección</th>
                                            <th>Colegio</th>
                                            <th>Año décimo grado</th>
                                            <th>Pensión décimo grado</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{info.nombre} {info.apellido}</td>
                                        
                                            <td>{info.documento}</td>
                                        
                                            <td>{info.celular}</td>
                                        
                                            <td>{info.fecha_n}</td>
                                        
                                            <td>{info.email_i}</td>
                                        
                                            <td>{info.ciudad_o}</td>
                                    
                                            <td>{info.direccion}</td>
                                        
                                            <td>{info.colegio}</td>
                                        
                                            <td>{info.anio_decimo}</td>
                                        
                                            <td>{info.pension_decimo}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Docente;