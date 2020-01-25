import React, { Component } from 'react';
import Accessorie from './accessorie';

class Accessories extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/accessories')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
    }

    render() {
        return(
            <div className="container">
                <div className="divide-container">Akcesoria</div>
                <div className="page-under-construction" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    {this.state.data.map((accessorie, index) => <Accessorie info={accessorie} index={index}/>)}
                </div>
            </div>
        )
    }
}

export default Accessories;