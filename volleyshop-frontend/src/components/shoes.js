import React, { Component } from 'react';
import Shoe from './shoe';

class Shoes extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/shoes')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
    }

    render() {
        return(
            <div className="container">
                <div className="divide-container">Obuwie</div>
                <div className="page-under-construction" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    {this.state.data.map((shoe, index) => <Shoe info={shoe} index={index}/>)}
                </div>
            </div>
        )
    }
}

export default Shoes;