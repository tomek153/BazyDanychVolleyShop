import React, { Component } from 'react';
import Clothe from './clothe';
import ContentPagination from '../contentPagination';

class Clothes extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        if (this.props.filter == "all") {
            fetch('http://localhost:8080/api/clothes')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "men") {
            fetch('http://localhost:8080/api/clothes/men')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "women") {
            fetch('http://localhost:8080/api/clothes/women')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        }
    }

    render() {
        let breadCrumb;

        if (this.props.filter == "all")
            breadCrumb =    <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Odzież</li>
                            </ol>
        else if (this.props.filter == "mens")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/odziez">Odzież</a></li>
                            <li className="breadcrumb-item active">Męska</li>
                        </ol>
        else if (this.props.filter == "womens")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/odziez">Odzież</a></li>
                            <li className="breadcrumb-item active">Damska</li>
                        </ol>

        return(
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    {breadCrumb}
                </nav>
                <div className="page-under-construction-my" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    <div className="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((clothe, index) => <Clothe info={clothe} index={index}/>)}
                    </div>
                    <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Clothes;