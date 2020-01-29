import React, { Component } from 'react';

function isAuthenticated() {
    const cookie = JSON.parse(localStorage.getItem('volleyshop'));
    if(cookie != null && JSON.stringify(cookie).length > 55)
        return cookie.email;
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
                    <div className="logout-button-my" onClick={this.logout} style={{border: '1px solid #aaa'}}>Logout</div>
                    <div className="user-info-my">{name}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="sign-button-my signup-button-my">Sign Up</div>
                    <div className="sign-button-my login-button-my"><span>Login </span></div>
                </div>
            )
        }    
    }
}

export default IsLoggedIn;