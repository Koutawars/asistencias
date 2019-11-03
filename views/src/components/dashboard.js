import React, {Component} from 'react'

class Dashboard extends Component {
    render(){
        console.log(this.props);
        return (<div><h1>bienvenido {this.props.usuario} a la DASHBOARD.</h1></div>)
    }
}

export default Dashboard;