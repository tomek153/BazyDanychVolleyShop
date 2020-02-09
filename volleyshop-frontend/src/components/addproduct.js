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

    changeTab = (id) => {
        // var element = document.getElementById("v-pills-"+id);
        // var tabs = document.getElementsByClassName("shoe-tab");
        // for(let i=0; i<tabs.length; i++) {
        //     tabs[i].classList.remove("show", "active");
        //     console.log(tabs[i].className);
        // }
        // element.classList.add("show", "active");
    }

    render() {
        return(
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Add Product</li>
                    </ol>
                </nav>
                <div className="row row-my">
                    <nav className="nav-add-product nav nav-pills flex-column flex-sm-row">
                        <a className="flex-sm-fill text-sm-center nav-link active" name="shoe">Obuwie</a>
                        <a className="flex-sm-fill text-sm-center nav-link" name="clothe">Odzież</a>
                        <a className="flex-sm-fill text-sm-center nav-link" name="accessorie">Akcesoria</a>
                        <a className="flex-sm-fill text-sm-center nav-link" name="suplement">Suplementy</a>
                    </nav>
                    <div class="col-9">
                        <div class="tab-content-add-product tab-content" id="v-pills-tabContent">
                            <div className="shoe-tab tab-pane fade show active" id="v-pills-shoe" role="tabpanel" aria-labelledby="v-pills-shoe-tab">1</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-clothe" role="tabpanel" aria-labelledby="v-pills-clothe-tab">2</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-accessorie" role="tabpanel" aria-labelledby="v-pills-accessorie-tab">3</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-suplement" role="tabpanel" aria-labelledby="v-pills-suplement-tab">4</div>
                        </div>
                    </div>
                    {/* <nav className="nav nav-pills flex-column flex-sm-row">
                        <a className="flex-sm-fill text-sm-center nav-link active">Obuwie</a>
                        <a onClick={() => this.changeTab("clothe")} class="flex-sm-fill text-sm-center nav-link" tabindex="-1" aria-disabled="true">Odzież</a>
                        <a className="flex-sm-fill text-sm-center nav-link" tabindex="-1" aria-disabled="true">Akcesoria</a>
                        <a className="flex-sm-fill text-sm-center nav-link" tabindex="-1" aria-disabled="true">Suplementy</a>
                    </nav>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div className="shoe-tab tab-pane fade show active" id="v-pills-shoe" role="tabpanel" aria-labelledby="v-pills-shoe-tab">1</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-clothe" role="tabpanel" aria-labelledby="v-pills-clothe-tab">2</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-accessorie" role="tabpanel" aria-labelledby="v-pills-accessorie-tab">3</div>
                            <div className="shoe-tab tab-pane fade" id="v-pills-suplement" role="tabpanel" aria-labelledby="v-pills-suplement-tab">4</div>
                        </div>
                    </div> */}
                </div>
                {/* <div style={{marginLeft: '50px', float: "left", fontSize: '24px', fontWeight: '400', color: '#58a724'}}>Obuwie</div>
                <div style={{marginLeft: '50px', float: "left", fontSize: '24px', fontWeight: '400'}}>Odziez</div>
                <div style={{marginLeft: '50px', float: "left", fontSize: '24px', fontWeight: '400'}}>Akcesoria</div>
                <div style={{marginLeft: '50px', float: "left", fontSize: '24px', fontWeight: '400'}}>Suplementy</div>
                <hr style={{marginTop: '70px'}}/>
                <div className="page-under-construction" style={{backgroundImage: 'none', width: '70%', padding: '20px', marginLeft: 'auto', marginRight: 'auto', minHeight: '1000px' }}>
                    <br /><label for="product"><b>Nazwa:</b></label>
                    <input id="name-shoe" className="input-login" type="text" placeholder="Wprowadź nazwe produktu" name="product" required onChange={this.handleNameChanged.bind(this)}/>
                    <br /><br /><label for="gender"><b>Plec:</b></label>
                    <select id="gender-shoe" onChange={this.handleGenderChanged.bind(this)} className="input-login" type="text" name="gender" required style={{width: '100%', backgroundColor: 'none', height: '40px', background: 'none', border: '1px solid #ccc'}}>
                        <option value="">Wybierz</option>
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
                </div> */}
            </div>
        )
    }
}

export default AddProduct;

// onChange={this.handleEmailChanged.bind(this)}