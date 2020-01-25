import React, { Component } from 'react';
import superagent from 'superagent';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            name: "", 
            gender: "", 
            brand: "", 
            description: "", 
            prize: "",
            image: ""
        }
    }   

    handleNameChanged(event) {
        this.setState({name: event.target.value});
    }
    handleGenderChanged(event) {
        this.setState({gender: event.target.value});
    }
    handleBrandChanged(event) {
        this.setState({brand: event.target.value});
    }
    handleDescriptionChanged(event) {
        this.setState({description: event.target.value});
    }
    handlePrizeChanged(event) {
        this.setState({prize: event.target.value});
    }
    handleImageChanged(event) {
        this.setState({image: event.target.value});
    }

    clearField() {
        document.getElementById("name-shoe").value = "";
        document.getElementById("gender-shoe").value = "";
        document.getElementById("brand-shoe").value = "";
        document.getElementById("description-shoe").value = "";
        document.getElementById("prize-shoe").value = "";
        document.getElementById("image-shoe").value = "";
        this.setState({email: ""});
        this.setState({gender: ""});
        this.setState({brand: ""});
        this.setState({description: ""});
        this.setState({prize: ""});
        this.setState({image: ""});
    }

    addProduct(event) {
        event.preventDefault();
        superagent
            .post('http://localhost:8080/api/shoes')
            .send(this.state)
            .end((err, res) => {
                if(err) {
                    alert("Bledne dane lub produkt istnieje!");
                } else {
                    alert("Dodano produkt")
                }
            }
        );
        this.clearField();
    }

    render() {
        console.log(this.state);
        return(
            <div className="container" style={{backgroundColor: '#fff'}}>
                <div className="divide-container">Dodaj produkt</div>
                <div className="page-under-construction" style={{backgroundImage: 'none', width: '70%', padding: '20px', marginLeft: 'auto', marginRight: 'auto', minHeight: '1000px' }}>
                    <br /><label for="product"><b>Nazwa:</b></label>
                    <input id="name-shoe" className="input-login" type="text" placeholder="Wprowadź nazwe produktu" name="product" required onChange={this.handleNameChanged.bind(this)}/>
                    <br /><br /><label for="gender"><b>Plec:</b></label>
                    <select id="gender-shoe" onChange={this.handleGenderChanged.bind(this)} className="input-login" type="text" name="gender" required style={{width: '100%', backgroundColor: 'none', height: '40px', background: 'none', border: '1px solid #ccc'}}>
                        <option value="">Wybierz dla kogo przeznaczono produkt</option>
                        <option value="Meskie">Meskie</option>
                        <option value="Damskie">Damskie</option>
                    </select>
                    <br /><br /><label for="brand"><b>Marka:</b></label>
                    <input id="brand-shoe" onChange={this.handleBrandChanged.bind(this)} className="input-login" type="text" placeholder="Wprowadź marke" name="brand" required />
                    <br /><br /><label for="description"><b>Opis:</b></label>
                    <input id="description-shoe" onChange={this.handleDescriptionChanged.bind(this)} className="input-login" type="text" placeholder="Wprowadź opis produktu" name="description" required />
                    <br /><br /><label for="prize"><b>Cena:</b></label>
                    <input id="prize-shoe" onChange={this.handlePrizeChanged.bind(this)} className="input-login" type="text" placeholder="Podaj sugerowana cene produktu" name="prize" required />
                    <br /><br /><label for="image"><b>Zdjecie:</b></label>
                    <input id="image-shoe" onChange={this.handleImageChanged.bind(this)} className="input-login" type="text" placeholder="Wprowadz url(link) do zdjecia" name="image" required />
                    <br /><br />
                    <button onClick={this.addProduct.bind(this)} className="login-button-modal" type="submit" >Dodaj</button>
                </div>
            </div>
        )
    }
}

export default AddProduct;

// onChange={this.handleEmailChanged.bind(this)}