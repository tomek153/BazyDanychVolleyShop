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
            <div style={{backgroundColor: '#2d302c'}}>
                <div className="nav-my">
                    <div className="container-my header-my">
                        <a href="/">
                            <img src={logoImage} className="header-inside-my header-icon-my w3-spin-my"/>
                        </a>
                        <div className="header-inside-my header-content-my">
                            <div className="header-inside-my header-site-name-my"><span style={{color: "#58a724"}}>Volley</span>Shop <span className="author-nav-my"><span style={{fontSize: '13px'}}>by</span> Tomasz Weiss</span></div>
                            <div className="header-inside-my header-search-my" style={{width: '700px'}}>
                                <IsLoggedIn />
                                <div id="id01" className="w3-modal">
                                    <Login />
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-my">
                    <div className="container-my navbar-my">
                    <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1043px", height: "60px"}}>
                        <a href="/">Home</a>
                        <div className="subnav-my">
                        <button className="subnav-btn-my"><a className="a-navigation-my" href="/shoes">Obuwie<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
                            <a href="/shoes">Męskie</a>
                            <a href="/shoes">Damskie</a>
                            <a href="/shoes">Junior</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav-my">
                        <button className="subnav-btn-my"><a className="a-navigation-my" href="/clothes">Odzież<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
                            <a href="/clothes">Męska</a>
                            <a href="/clothes">Damska</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav-my">
                        <button className="subnav-btn-my"><a className="a-navigation-my" href="/accessories">Akcesoria<i className="fa fa-caret-down"></i></a></button>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
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
                <div style={{height: '47px', backgroundColor: '#585a57', boxShadow: 'inset 0px 8px 5px -5px #2d302c'}}></div>
            </div>
        )
    }
}

export default Navigation;