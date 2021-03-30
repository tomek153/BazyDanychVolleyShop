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
        return(
            <div className="w3-modal-content w3-card-4" id="login-modal-content" style={{maxWidth: "600px", backgroundColor: "#fff"}}>
                <div className="imgcontainer-my">
                    <h2 className="header-login-my w3-card-4">Logowanie</h2>
                    <img src={avatarImage} alt="Avatar" className="avatar-my"/>
                </div>
                <div className="login-input-container-my">
                    <label htmlFor="uname"><b>Użytkownik:</b></label>
                    <input id="email-log-input" className="input-login-my" type="text" placeholder="Wprowadź mail" name="uname" required onChange={this.handleEmailChanged.bind(this)}/>

                    <label htmlFor="psw"><b>Hasło:</b></label>
                    <input id="password-log-input" className="input-login-my" type="password" placeholder="Wprowadź hasło" name="psw" required onChange={this.handlePasswordChanged.bind(this)}/>

                    <label>
                        <input type="checkbox" name="remember" onClick={this.showPassword}/><span style={{fontSize: "16px"}}> Pokaż hasło</span>
                    </label>

                    <button className="login-button-modal-my" type="submit" onClick={this.login.bind(this)}>Zaloguj</button>
                </div>
                <div className="login-input-container-my" style={{backgroundColor: "#ddd"}}>
                    <button type="button" className="cancelbtn-my" onClick={this.clearField.bind(this)}>Anuluj</button>
                    <span className="psw-my">Zapomniałeś <a href="#">hasła</a>?</span>
                </div>
                <div className="change-to-button-my change-to-signup-button-my w3-card-4" onClick={this.clearField.bind(this)}>Utwórz konto <span></span></div>
            </div>
        )
    }
}

export default Login;