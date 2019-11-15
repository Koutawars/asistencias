import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class codigoQr extends Component {
    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        console.log(dataUri);
      }
    constructor(props)
    {
        super(props);
    }
    render(){
        if(this.props.data.tipoId === 1){

        }
        return (
        <div>
            <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
            <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
        </div>);
    }
}
export default codigoQr;