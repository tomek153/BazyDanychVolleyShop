import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="divide-container">Start</div>
                <div className="page-under-construction" style={{backgroundImage: 'url(https://s.redefine.pl/file/o2/redefine/cp/mn/mnvtk3v2nmg4nsbr7oduraphzze83m8i.jpg)'}}>
                    <div style={{width: '100%', height: '100%', backgroundColor: "rgba(0, 0, 0, 0.7)", fontSize: '60px', textAlign: 'center', color: "#ccc", lineHeight: '11.0'}}>
                        Witaj w VolleyShop
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;