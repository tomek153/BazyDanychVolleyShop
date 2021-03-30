import React, { Component } from 'react';
import Shoe from './shoe';
import ContentPagination from '../contentPagination';

class Shoes extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        if (this.props.filter == "all") {
            fetch('http://localhost:8080/api/shoes')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
        } else if (this.props.filter == "mens") {
            fetch('http://localhost:8080/api/shoes/mens')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
        } else if (this.props.filter == "womens") {
            fetch('http://localhost:8080/api/shoes/womens')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            })
        } else if (this.props.filter == "junior") {
            fetch('http://localhost:8080/api/shoes/juniors')
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
                                <li className="breadcrumb-item active">Obuwie</li>
                            </ol>
        else if (this.props.filter == "mens")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/obuwie">Obuwie</a></li>
                            <li className="breadcrumb-item active">Męskie</li>
                        </ol>
        else if (this.props.filter == "womens")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/obuwie">Obuwie</a></li>
                            <li className="breadcrumb-item active">Damskie</li>
                        </ol>
        else if (this.props.filter == "juniors")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/obuwie">Obuwie</a></li>
                            <li className="breadcrumb-item active">Junior</li>
                        </ol>

        return(
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    {breadCrumb}
                </nav>
                <div className="page-under-construction-my" style={{backgroundImage: 'none'}}>
                    <div className="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((shoe, index) => <Shoe info={shoe} index={index}/>)}
                    </div>
                        <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Shoes;