import React, { Component } from 'react';
import Supplement from './supplement';
import ContentPagination from './contentPagination';

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
            <div className="container-my">
                <div className="divide-container-my" style ={{marginBottom: '50px', marginTop: '10px'}}>Suplementy</div>
                <div className="page-under-construction-my" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    <div class="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((supplement, index) => <Supplement info={supplement} index={index}/>)}
                    </div>
                    <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Supplements;