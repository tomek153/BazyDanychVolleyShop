import React, { Component } from 'react';
import superagent from 'superagent';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        }
    }

    handleEmailChanged(event) {
        this.setState({email: event.target.value});
    }

    handleFirstNameChanged(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChanged(event) {
        this.setState({lastName: event.target.value});
    }

    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }

    showPassword() {
        var x = document.getElementById("pass-input");
        if (x.type === "password")
          x.type = "text";
        else
          x.type = "password";
    }

    submitForm(event) {
        event.preventDefault();
        this.clearField();
        superagent
            .post('http://localhost:8080/api/users')
            .send(this.state)
            .end((err, res) => {
                if(err) {
                    if(res.body.message == "User exist")
                        alert("User already exist!");
                    else
                        alert("Registration failed");
                    return;
                } else {
                    alert("Konto zostalo utworzone");
                    window.location.replace('http://localhost:3000');
                }
            }
        );
    }

    clearField() {
        document.getElementById("email-reg-input").value = "";
        document.getElementById("name-reg-input").value = "";
        document.getElementById("surname-reg-input").value = "";
        document.getElementById("pass-input").value = "";
        this.setState({email: ""});
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({password: ""});
    }

    render() {
        console.log('state:', this.state);
        return(
            <div className="w3-modal-content w3-card-4" id="signup-modal-content" style={{maxWidth: "700px", height: "auto"}}>
                <form style={{backgroundColor: "#fff", color: "#444", fontSize: "20px", padding: "16px", marginTop: "25px"}}>
                    <h2 className="header-login-my w3-card-4" style={{margin: "-16px 0px 0px -16px"}}>Rejestracja</h2>
                    <p>Wypełnij formularz, aby utworzyć konto.</p>
                    <hr/>

                    <label htmlFor="email"><b>Użytkownik:</b></label>
                    <input id="email-reg-input" className="input-login-my" type="text" placeholder="Wprowadź mail" name="email" required
                        value={this.state.email} onChange={this.handleEmailChanged.bind(this)}/>
                    <div className="clearfix-my">
                        <div className="input-name-divider-my">
                            <label htmlFor="firstName"><b>Imię:</b></label>
                            <input id="name-reg-input" className="input-login-my" type="text" placeholder="Wprowadź imię" name="firstName" required
                                value={this.state.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
                        </div>
                        <div className="input-name-divider-my">
                            <label htmlFor="lastName"><b>Nazwisko:</b></label>
                            <input id="surname-reg-input" className="input-login-my" type="text" placeholder="Wprowadź nazwisko" name="lastName" required
                                value={this.state.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
                        </div>
                    </div>

                    <label htmlFor="password"><b>Hasło:</b></label>
                    <input id="pass-input" className="input-login-my" type="password" placeholder="Wprowadź hasło" name="password" required
                        value={this.state.password} onChange={this.handlePasswordChanged.bind(this)}/>

                    <label>
                        <input type="checkbox" name="show-passwd" style={{marginBottom: "15px", fontSize: "16px"}}
                            onClick={this.showPassword}/> Pokaż hasło
                    </label>

                    <p style={{fontSize: "18px"}}>Tworząc konto, zgadzasz się na nasze
                        <a href="#" style={{color: "dodgerblue"}}>warunki prywatność</a>.
                    </p>

                    <div className="clearfix-my">
                        <button type="button" className="cancelbtn-signup-my signup-buttons-my" onClick={this.clearField.bind(this)}>Anuluj</button>
                        <button type="button" className="signupbtn-my signup-buttons-my" onClick={this.submitForm.bind(this)}>Utwórz konto</button>
                    </div>
                </form>
                <div className="change-to-button-my change-to-login-button-my w3-card-4" onClick={this.clearField.bind(this)}><span></span> Zaloguj sie</div>
            </div>
        )
    }
}

export default Register;