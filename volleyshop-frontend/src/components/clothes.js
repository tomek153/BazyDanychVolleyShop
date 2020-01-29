import React, { Component } from 'react';
import Clothe from './clothe';
import ContentPagination from './contentPagination';

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
            <div className="container-my">
                <div className="divide-container-my">Odziez</div>
                <div className="page-under-construction-my" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    <div class="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((clothe, index) => <Clothe info={clothe} index={index}/>)}
                    </div>
                    <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Clothes;