import React, { Component } from 'react';
import superagent from 'superagent';

function isAuthenticated() {
    const cookie = JSON.parse(localStorage.getItem('volleyshop'));
    if(cookie != null && JSON.stringify(cookie).length > 55)
        return cookie.firstName;
    else
        return null
}

class IsLoggedIn extends Component {

    logout() {
        localStorage.removeItem('volleyshop');
        window.location.replace('http://localhost:3000');
    }
    
    render() {
        var name = isAuthenticated();
        if(name != null) {
            return (
                <div>
                    <div className="logout-button" onClick={this.logout}>Logout</div>
                    <div className="user-info">{name}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="sign-button signup-button">Sign Up</div>
                    <div className="sign-button login-button"><span>Login </span></div>
                </div>
            )
        }    
    }
}

export default IsLoggedIn;