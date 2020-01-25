import React, { Component } from 'react';

import logoImage from '../images/volley-logo.png';

import Login from './login';
import Register from './registration';
import IsLoggedIn from './isLoggedIn';

function locationToShoes() {
    window.location.replace('/shoes');
}

class Navigation extends Component {
    render() {
        return(
            <div>
                <div className="nav">
                    <div className="container header">
                        <a href="/">
                            <img src={logoImage} className="header-inside header-icon w3-spin-my"/>
                        </a>
                        <div className="header-inside header-content">
                            <div className="header-inside header-site-name"><span style={{color: "#58a724"}}>Volley</span>Shop</div>
                            <div className="header-inside header-search" style={{width: '700px'}}>
                                <input type="text" placeholder="Szukaj..." className="header-search-input" name="search"/>
                                <div className="parent-search">
                                    <div className="search-submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-340 -360 1200 1200">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                    </div>
                                </div>
                                <IsLoggedIn />
                                <div id="id01" className="w3-modal">
                                    <Login />
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="container navbar">
                    <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1043px", height: "60px"}}>
                        <a href="/">Home</a>
                        <div className="subnav">
                        <button className="subnav-btn"><a className="a-navigation" href="/shoes">Obuwie<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content">
                            <div className="subnav-container">
                            <a href="/shoes">Męskie</a>
                            <a href="/shoes">Damskie</a>
                            <a href="/shoes">Junior</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav">
                        <button className="subnav-btn"><a className="a-navigation" href="/clothes">Odzież<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content">
                            <div className="subnav-container">
                            <a href="/clothes">Męska</a>
                            <a href="/clothes">Damska</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav">
                        <button className="subnav-btn"><a className="a-navigation" href="/accessories">Akcesoria<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content">
                            <div className="subnav-container">
                            <a href="/accessories">Piłki</a>
                            <a href="/accessories">Plecaki i torby</a>
                            <a href="/accessories">Nakolanniki</a>
                            <a href="/accessories">Rękawki siatkarskie</a>
                            <a href="/accessories">Skarpetki</a>
                            <a href="/accessories">Sprzęt do ćwiczen</a>
                            <a href="/accessories">Suplementy</a>
                            </div>
                        </div>
                        </div>
                        <a href="/supplements">Suplementy</a>
                        <a href="/add-product">Dodaj produkt</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;