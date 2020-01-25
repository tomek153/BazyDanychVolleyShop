import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="col-md-3">
                        <p>Informacje</p>
                        <ul>
                            <li><a href="/under-costruction">O nas</a></li>
                            <li><a href="/under-costruction">Kontakt</a></li>
                            <li><a href="/under-costruction">Regulamin</a></li>
                            <li><a href="/under-costruction">Polityka Prywatności i cookies</a></li>
                        </ul>
                        <span className="copy-rights">
                            Copyright &copy; 2019 by <span style={{color: "#ddd"}}>volleyshop.pl</span> - all rights reserved
                        </span>
                    </div>
                    <div className="col-md-3">
                        <p>Obsługa klienta</p>
                        <ul>
                            <li><a href="/under-costruction">Płatności i dostawa</a></li>
                            <li><a href="/under-costruction">Zwroty</a></li>
                            <li><a href="/under-costruction">Reklamacje</a></li>
                            <li><a href="/under-costruction">Karta podarunkowa</a></li>
                            <li><a href="/under-costruction">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <p>Znajdz nas</p>
                        <ul>
                            <li><a className="social-links" href="https://www.facebook.com/" target="_blank"><span className="social-icons"><i className="fa fa-facebook fa-2x"></i></span>Facebook</a></li>
                            <li><a className="social-links" href="https://twitter.com/" target="_blank"><span className="social-icons"><i className="fa fa-twitter fa-2x"></i></span>Twitter</a></li>
                            <li><a className="social-links" href="https://www.youtube.com/" target="_blank"><span className="social-icons"><i className="fa fa-youtube fa-2x"></i></span>YouTube</a></li>
                            <li><a className="social-links" href="https://www.instagram.com/" target="_blank"><span className="social-icons"><i className="fa fa-instagram fa-2x"></i></span>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;