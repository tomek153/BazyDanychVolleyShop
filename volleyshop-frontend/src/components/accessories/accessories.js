import React, { Component } from 'react';
import Accessorie from './accessorie';
import ContentPagination from '../contentPagination';

class Accessories extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        if (this.props.filter == "all") {
            fetch('http://localhost:8080/api/accessories')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "balls") {
            fetch('http://localhost:8080/api/accessories/balls')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "bags") {
            fetch('http://localhost:8080/api/accessories/bags')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "knee-pads") {
            fetch('http://localhost:8080/api/accessories/knee-pads')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "sleeves") {
            fetch('http://localhost:8080/api/accessories/sleeves')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "socks") {
            fetch('http://localhost:8080/api/accessories/socks')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "workout") {
            fetch('http://localhost:8080/api/accessories/workout')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data })
                })
        } else if (this.props.filter == "other") {
            fetch('http://localhost:8080/api/accessories/other')
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
                                <li className="breadcrumb-item active">Akcesoria</li>
                            </ol>
        else if (this.props.filter == "balls")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Piłki</li>
                        </ol>
        else if (this.props.filter == "bags")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Plecaki i torby</li>
                        </ol>
        else if (this.props.filter == "knee-pads")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Nakolanniki</li>
                        </ol>
        else if (this.props.filter == "sleeves")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Rękawki siatkarskie</li>
                        </ol>
        else if (this.props.filter == "socks")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Skarpetki</li>
                        </ol>
        else if (this.props.filter == "workout")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Sprzęt do ćwiczeń</li>
                        </ol>
        else if (this.props.filter == "other")
        breadCrumb =    <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/akcesoria">Akcesoria</a></li>
                            <li className="breadcrumb-item active">Inne</li>
                        </ol>


        return(
            <div className="container-my">
                <nav aria-label="breadcrumb">
                    {breadCrumb}
                </nav>
                <div className="page-under-construction-my" style={{backgroundImage: 'none', padding: '0px 20px'}}>
                    <div className="row row-cols-1 row-cols-md-3">
                        {this.state.data.map((accessorie, index) => <Accessorie info={accessorie} index={index}/>)}
                    </div>
                    <ContentPagination />
                </div>
            </div>
        )
    }
}

export default Accessories;