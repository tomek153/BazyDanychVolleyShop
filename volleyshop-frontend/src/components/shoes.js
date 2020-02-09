import React, { Component } from 'react';
import Shoe from './shoe';
import ContentPagination from './contentPagination';

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
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Obuwie</li>
                    </ol>
                </nav>
                <div className="page-under-construction-my" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    <div class="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((shoe, index) => <Shoe info={shoe} index={index}/>)}
                    </div>
                        <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Shoes;