import React, { Component } from 'react';
import superagent from 'superagent';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab';
import AddShoe from './addShoe';
import AddClothe from './addClothe';
import AddAccessorie from './addAccessorie';
import AddSuplement from './addSuplement';


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
        return(
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Dodaj produkt</li>
                    </ol>
                </nav>
                <div className="row row-my" style={{backgroundColor: "#ff000000", minHeight: "650px"}}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" sytle={{backgroundColor: '#dee2e6'}}>Obuwie</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Odzież</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Akcesoria</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Suplementy</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content style={{backgroundColor: "#fff"}}>
                                <Tab.Pane eventKey="first">
                                    <AddShoe />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AddClothe />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <AddAccessorie />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <AddSuplement />
                                </Tab.Pane>
                            </Tab.Content>
                    </Tab.Container>

                </div>
            </div>
        )
    }
}

export default AddProduct;

// onChange={this.handleEmailChanged.bind(this)}