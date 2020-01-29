import React, { Component } from 'react';   

class Clothe extends Component {

    showDetail = (numb) => {
        document.getElementsByClassName("product-info-wrapper-my")[numb].style.display = "block";
    }

    hideDetail = (numb) => {
        document.getElementsByClassName("product-info-wrapper-my")[numb].style.display = "none";
    }

    render() {
        return (
            <div className="col mb-4" style={{width: '33%', float: 'left',}}>
                <div className="card" onClick={() => this.showDetail(this.props.index)}>
                    <div className="card-image-cont">
                        <img src={this.props.info.image} className="card-img-top"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.info.name}</h5>
                        <p className="card-text">{this.props.info.brand}, {this.props.info.gender}</p>
                    </div>
                </div>
                <div className="product-info-wrapper-my" onClick={() => this.hideDetail(this.props.index)}>
                    <div className="modal-product-container-my w3-animate-top-my">
                        <div className="product-info-my" style={{backgroundImage: 'url('+this.props.info.image+')'}}></div>
                        <div className="specyfics-product-info-my">
                            <div className="info-detail-header-my">Informacje:</div>
                            <div className="container-info-detail-my">
                                <span className="info-detail-my">Nazwa:</span><i className="info-detail-values-my">{this.props.info.name}</i>
                                <span className="info-detail-my" >Rodzaj:</span><i className="info-detail-values-my">{this.props.info.gender}</i>
                                <span className="info-detail-my" >Marka:</span><i className="info-detail-values-my">{this.props.info.brand}</i>
                                <span className="info-detail-my" >Sugerowana cena:</span><i className="info-detail-values-my">{this.props.info.prize}zl</i>
                            </div>
                            <div className="product-description-rate">
                                Ocena: <br />
                                <i className="far fa-star star"></i>
                                <i className="far fa-star star"></i>
                                <i className="far fa-star star"></i>
                                <i className="far fa-star star"></i>
                                <i className="far fa-star star"></i>
                                &nbsp;<span style={{color: '#333', fontSize: '18px'}}>(5)</span>
                            </div>
                        </div>
                        <div className="product-description-my">
                            <span style={{fontSize: '18px'}}>Opis produktu:</span><br />
                            <span>{this.props.info.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Clothe;