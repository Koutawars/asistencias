import React, {Component} from 'react';
import Login from './login'

class AuthenticatedComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:undefined
        }
    }
    render(){
        return (
            <Login></Login>
        );
    }
}
export default AuthenticatedComponent;