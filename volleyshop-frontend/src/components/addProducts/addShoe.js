import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class AddShoe extends Component {
    
    constructor() {
        super();
        this.state = {
            name: "",
            brand: "",
            description: "",
            prize: "",
            gender: "Meskie",
            image: ""
        }
    }

    handleNameChanged(event) {
        this.state.name = event.target.value;

        let inputLength = event.target.value.length;
        let message = document.getElementById("image-link-alert-name");
        let messageToShort = '<sub>min 3 znaki</sub>';
        let messageToLong = '<sub>max 35 znaków</sub>';

        this.checkMessageState(3, 35, inputLength, messageToShort, messageToLong, message);
    }

    handleBrandChanged(event) {
        this.state.brand = event.target.value;

        let inputLength = event.target.value.length;
        let message = document.getElementById("image-link-alert-brand");
        let messageToShort = '<sub>min 3 znaki</sub>';
        let messageToLong = '<sub>max 20 znaków</sub>';

        this.checkMessageState(3, 20, inputLength, messageToShort, messageToLong, message);
    }

    handleDescriptionChanged(event) {
        this.state.description = event.target.value;

        let inputLength = event.target.value.length;
        let message = document.getElementById("image-link-alert-description");
        let messageToShort = '<sub>min 20 znaków</sub>';
        let messageToLong = '<sub>max 700 znaków</sub>';
        console.log(inputLength);

        this.checkMessageState(20, 700, inputLength, messageToShort, messageToLong, message);
    }
    
    handlePrizeChanged(event) {

        let value = event.target.value;
        let message = document.getElementById("image-link-alert-prize");
        let messageNotNumber = '<sub>podaj liczbe</sub>';

        if (Number(value) == value && value.toString().indexOf(',') == -1) {
            message.style.display = "none";
            this.state.prize = parseFloat(event.target.value).toFixed(2);
        } else {
            message.style.display = "block";
            message.innerHTML = messageNotNumber;
        }
        console.log(this.state.prize);
    }

    checkPrize(event) {
        let value = event.target.value;
        
        if (Number(value) == value && value.toString().indexOf('.') == -1 && value.toString().indexOf(',') == -1 ) {
            value = value+".00";
            this.state.prize = value;
            event.target.value = value;
            console.log(this.state.prize);
        }
        if (Number(value) == value && value.toString().indexOf(',') != -1) {
            value = value.replace(',', '.');
            this.state.prize = value;
            event.target.value = value;
            console.log(this.state.prize);
        }
    }

    handleGenderChanged(event) {
        this.setState({gender: event.target.value});
    }

    handleImageChanged(event) {
        this.setState({image: event.target.value});
    }

    checkMessageState(from, to, length, messageShort, messageLong, element) {
        if (length < from) {
            element.style.display = "block";
            element.innerHTML = messageShort;
        } else if (length > to) {
            element.style.display = "block";
            element.innerHTML = messageLong;
        } else {
            element.style.display = "none";
        }
    }

    render() {
        console.log(this.state);
        return(
            <div className="add-item-container">
                <h3 style={{color: "#555"}}>Dodaj model obuwia</h3>
                <hr />
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Model</Form.Label><span id="image-link-alert-name" className="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź model, np. Dame 6" required onChange={this.handleNameChanged.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBrand" >
                            <Form.Label>Marka</Form.Label><span id="image-link-alert-brand" className="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź marke, np. Adidas" required onChange={this.handleBrandChanged.bind(this)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Opis produktu</Form.Label><span id="image-link-alert-description" className="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                        <Form.Control className="description-form-label" placeholder="wprowadź opis produktu" required onChange={this.handleDescriptionChanged.bind(this)}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPrize">
                            <Form.Label>Sugerowana cena</Form.Label><span id="image-link-alert-prize" className="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź cene, np. 159.99" required onChange={this.handlePrizeChanged.bind(this)} onBlur={this.checkPrize.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Rodzaj</Form.Label>
                            <Form.Control as="select" required onChange={this.handleGenderChanged.bind(this)}>
                                <option>Męskie</option>
                                <option>Damskie</option>
                                <option>Junior</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Group controlId="formGridPhotoLink">
                        <Form.Label>Link do zdjęcia</Form.Label><span className="image-link-alert"><sub>Podano nieprawidłowy link.</sub></span>
                        <Form.Control placeholder="wprowadź link do zdjęcia, np. https://przykladowa.strona.net/... /zdjecie.jpg." required onChange={this.handleImageChanged.bind(this)}/>
                        
                    </Form.Group>
                    <br/>

                    <Button variant="primary" type="submit" disabled>
                        Dodaj produkt
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddShoe;