import React, { Component } from 'react';
import Clothe from './clothe';

class Clothes extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/clothes')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
    }

    render() {
        return(
            <div className="container">
                <div className="divide-container">Odziez</div>
                <div className="page-under-construction" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    {this.state.data.map((clothe, index) => <Clothe info={clothe} index={index}/>)}
                </div>
            </div>
        )
    }
}

export default Clothes;