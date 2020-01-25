import React, { Component } from 'react';
import Supplement from './supplement';

class Supplements extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/supplements')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
    }

    render() {
        return(
            <div className="container">
                <div className="divide-container">Suplementy</div>
                <div className="page-under-construction" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    {this.state.data.map((supplement, index) => <Supplement info={supplement} index={index}/>)}
                </div>
            </div>
        )
    }
}

export default Supplements;