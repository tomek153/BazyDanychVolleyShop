import React, { Component } from 'react';
import avatarImage from '../images/avatar-login.png';
import superagent from 'superagent';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    clearField() {
        document.getElementById("email-log-input").value = "";
        document.getElementById("password-log-input").value = "";
        this.setState({email: ""});
        this.setState({password: ""});
    }

    handleEmailChanged(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }

    showPassword() {
        var x = document.getElementById("password-log-input");
        if (x.type === "password")
          x.type = "text";
        else
          x.type = "password";
    }

    login(event) {
        var cookie;
        event.preventDefault();
        superagent
            .post('http://localhost:8080/api/login')
            .send(this.state)
            .end((err, res) => {
                if(err) {
                    alert("Blad logowania!");
                } else {
                    cookie = JSON.parse(res.text);
                    console.log(cookie.value);
                    localStorage.setItem("volleyshop", JSON.stringify(cookie.value));
                    window.location.replace('http://localhost:3000');
                }
            }
        );
        this.clearField();
    }

    render() {
        console.log('state:', this.state);
        return(
            <div className="w3-modal-content w3-card-4" id="login-modal-content" style={{maxWidth: "600px", backgroundColor: "#fff"}}>
                <div className="imgcontainer">
                    <h2 className="header-login w3-card-4">Logowanie</h2>
                    <img src={avatarImage} alt="Avatar" className="avatar"/>
                </div>
                <div className="login-input-container">
                    <label for="uname"><b>Użytkownik:</b></label>
                    <input id="email-log-input" className="input-login" type="text" placeholder="Wprowadź mail" name="uname" required onChange={this.handleEmailChanged.bind(this)}/>

                    <label for="psw"><b>Hasło:</b></label>
                    <input id="password-log-input" className="input-login" type="password" placeholder="Wprowadź hasło" name="psw" required onChange={this.handlePasswordChanged.bind(this)}/>

                    <label>
                        <input type="checkbox" name="remember" onClick={this.showPassword}/><span style={{fontSize: "16px"}}> Pokaż hasło</span>
                    </label>

                    <button className="login-button-modal" type="submit" onClick={this.login.bind(this)}>Zaloguj</button>
                </div>
                <div className="login-input-container" style={{backgroundColor: "#ddd"}}>
                    <button type="button" className="cancelbtn" onClick={this.clearField.bind(this)}>Anuluj</button>
                    <span className="psw">Zapomniałeś <a href="#">hasła</a>?</span>
                </div>
                <div className="change-to-button change-to-signup-button w3-card-4" onClick={this.clearField.bind(this)}>Utwórz konto <span></span></div>
            </div>
        )
    }
}

export default Login;