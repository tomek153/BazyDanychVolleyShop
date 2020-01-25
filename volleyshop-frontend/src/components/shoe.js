import React, { Component } from 'react';   

class Shoe extends Component {

    showDetail = (numb) => {
        document.getElementsByClassName("product-info-wrapper")[numb].style.display = "block";
    }

    hideDetail = (numb) => {
        document.getElementsByClassName("product-info-wrapper")[numb].style.display = "none";
    }

    render() {
        return (
            <div className="product-tiles" style={{backgroundImage: "url("+this.props.info.image+")", backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat"}}>
                <div key="1" className="product-tiles-front" onClick={() => this.showDetail(this.props.index)}>
                    <span className="tile-name">{this.props.info.name}</span>
                </div>
                <div className="product-info-wrapper w3-animate-opacity-my" onClick={() => this.hideDetail(this.props.index)}>
                    <div className="product-info" style={{backgroundImage: "url("+this.props.info.image+")", backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat"}}>
                        <div className="specyfics-product-info">
                            <span style={{fontSize: "19px", color: "#000"}}>Nazwa:</span> <i style={{color: "#444"}}>{this.props.info.name}</i><br />
                            <span style={{fontSize: "19px"}}>Rodzaj:</span> <i style={{color: "#444"}}>{this.props.info.gender}</i><br />
                            <span style={{fontSize: "19px"}}>Marka:</span> <i style={{color: "#444"}}>{this.props.info.brand}</i><br />
                            <span style={{fontSize: "19px"}}>Sugerowana cena:</span> <i style={{color: "#444"}}>{this.props.info.prize}zl</i>
                        </div>
                    </div>
                    <div className="product-description">
                        <span style={{fontSize: '18px'}}>Opis produktu:</span><br />
                        <span>{this.props.info.description}</span>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Shoe;