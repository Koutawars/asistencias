import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import ListaGrupos from '../../components/Listas/ListaGrupos';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class DocenteGrupos extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            grupos: []
        }
    }

    
    componentDidMount(){
        const jwt = getJwt();
        const materiaId = this.props.match.params.id;
        let url = "http://localhost:5000/api/docente/" + materiaId + "/getGrupos";
        axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        } )
        .then(res => {
            this.setState({
                grupos: res.data.grupo,
                nombre: res.data.nombre,
            })
            console.log("DATA: ", this.props.location);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
                
                <h4 className="left-align">
                    <span>Grupos de {this.props.location.state.materia.nombre}</span>
                </h4>
                <div className="divider"></div>
                <div className="section">
                    <div className="container center-align">
                        <ListaGrupos grupos={this.state.grupos} />
                    </div>
                </div>
                            
            </React.Fragment>
        );
    }
}

export default withRouter(DocenteGrupos);