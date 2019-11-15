import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';

class codigoQr extends Component {
    constructor(props)
    {
        super(props);     
    }
    
    componentWillMount(){
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => console.log(stream))
      .catch(e => console.log(e.name + ": "+ e.message)); 
    }

    render(){
      if(this.props.data.tipoId === 1){
      }
      return (
      <div>
        <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
      </div>);
    }
}

export default codigoQr;