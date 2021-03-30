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
                        <a className="a-navigation-my" href="/obuwie"><button className="subnav-btn-my">Obuwie<i className="fa fa-caret-down"></i></button></a>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
                            <a href="/obuwie-meskie">Męskie</a>
                            <a href="/obuwie-damskie">Damskie</a>
                            <a href="/obuwie-junior">Junior</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav-my">
                        <a className="a-navigation-my" href="/odziez"><button className="subnav-btn-my">Odzież<i className="fa fa-caret-down"></i></button></a>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
                            <a href="/odziez-meska">Męska</a>
                            <a href="/odziez-damska">Damska</a>
                            </div>
                        </div>
                        </div>
                        <div className="subnav-my">
                        <a className="a-navigation-my" href="/akcesoria"><button className="subnav-btn-my">Akcesoria<i className="fa fa-caret-down"></i></button></a>
                        <div className="subnav-content-my">
                            <div className="subnav-container-my">
                            <a href="/akcesoria-pilki">Piłki</a>
                            <a href="/akcesoria-plecaki-i-torby">Plecaki i torby</a>
                            <a href="/akcesoria-nakolanniki">Nakolanniki</a>
                            <a href="/akcesoria-rekawki-siatkarskie">Rękawki siatkarskie</a>
                            <a href="/akcesoria-skarpetki">Skarpetki</a>
                            <a href="/akcesoria-sprzet-do-cwiczen">Sprzęt do ćwiczen</a>
                            <a href="/akcesoria-inne">Inne</a>
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