import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AddAccessorie extends Component {
    
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
        this.setState({name: event.target.value});
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

    handleGenderChanged(event) {
        this.setState({gender: event.target.value});
    }

    handleImageChanged(event) {
        this.setState({image: event.target.value});
    }

    render() {
        console.log(this.state);
        return(
            <div class="add-item-container">
                <h3 style={{color: "#555"}}>Dodaj przedmiot</h3>
                <hr />
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Model</Form.Label><span class="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź model, np. Dame 6" required onChange={this.handleNameChanged.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBrand" >
                            <Form.Label>Marka</Form.Label><span class="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź marke, np. Adidas" required onChange={this.handleBrandChanged.bind(this)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Opis produktu</Form.Label><span class="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                        <Form.Control className="description-form-label" placeholder="wprowadź opis produktu" required onChange={this.handleDescriptionChanged.bind(this)}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPrize">
                            <Form.Label>Sugerowana cena</Form.Label><span class="image-link-alert"><sub>Podano nieprawidłową wartość.</sub></span>
                            <Form.Control placeholder="wprowadź cene, np. 159.99" required onChange={this.handlePrizeChanged.bind(this)}/>
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
                        <Form.Label>Link do zdjęcia</Form.Label><span class="image-link-alert"><sub>Podano nieprawidłowy link.</sub></span>
                        <Form.Control placeholder="wprowadź link do zdjęcia, np. https://przykladowa.strona.net/... /zdjecie.jpg." required onChange={this.handleImageChanged.bind(this)}/>
                        
                    </Form.Group>
                    <br/>

                    <Button variant="primary" type="submit">
                        Dodaj produkt
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddAccessorie;