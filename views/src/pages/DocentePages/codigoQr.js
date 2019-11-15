import React, { Component } from 'react';
import NavbarLog from '../../components/NavbarLog';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class codigoQr extends Component {
    constructor(props)
    {
        super(props);     
    }
    
    capture(){
      const video = document.querySelectorAll('video')[0];
      var canvas = document.getElementById('canvas');     
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight); 
      canvas.toBlob((blob) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
            var base64data = reader.result;   
            const jwt = getJwt();
            let url = "http://" + window.location.hostname + ":5000/api/docente/codigoqr";
            axios.post(url, {
              imagen: base64data
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            } )
            .then(res => {
                console.log("DATA: ", res.data);
            }).catch(err => {
                console.log(err);
            });
        } 
      });
    }
    componentDidMount(){
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
        const video = document.querySelectorAll('video')[0];
        const videoTracks = stream.getVideoTracks();
        console.log(`Using video device: ${videoTracks[0].label}`);
        window.stream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
          video.play();
          this.capture(video);
        };
      })
      .catch(e => console.log(e.name + ": "+ e.message)); 
    }

    render(){
      if(this.props.data.tipoId === 1){
      }
      return (
      <div>
        <NavbarLog tipo = {this.props.data.tipoId} nombre={this.props.data.nombre}></NavbarLog>
        <video style={{paddingLeft:'25%'}} src=""></video>
        <button onClick={this.capture}>Tomar foto</button>
        <canvas id="canvas"></canvas>
      </div>);
    }
}

export default codigoQr;