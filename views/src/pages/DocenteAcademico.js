import React, { Component } from 'react';
import NavbarLog from '../components/NavbarLog';
import ListaMaterias from '../components/ListaMaterias';

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
            materias: [
                {
                    id: 1,
                    nombre: 'Arquitectura del Software',
                    codigo_cni: 4455,
                    programa: 'Ingenieria de Sistemas',
                },
                {
                    id: 2,
                    nombre: 'Programación para la Web',
                    codigo_cni: 2123,
                    programa: 'Ingenieria de Sistemas',
                },
                {
                    id: 3,
                    nombre: 'Programacion orientada a objetos',
                    codigo_cni: 132,
                    programa: 'Ingenieria de Sistemas',
                },
                {
                    id: 4,
                    nombre: 'Ingenieria del software',
                    codigo_cni: 912,
                    programa: 'Ingenieria de Sistemas',
                },
            ],
        };
    }

    render() {
        const info = this.state;
        return (
            <React.Fragment>
                <NavbarLog id="999" firstName="Johan" lastName="Robles"></NavbarLog>
                <h4 className="left-align">
                    <span>Asignaturas</span>
                </h4>

                <div className="divider"></div>

                <div className="section">
                    <div className="container center-align">
                        <ListaMaterias materias={info.materias}/>
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default Docente;