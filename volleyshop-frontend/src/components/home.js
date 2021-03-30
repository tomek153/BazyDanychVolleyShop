import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div className="container-my">
                <nav aria-label="breadcrumb" style={{marginBottom: "30px"}}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Home</li>
                    </ol>
                </nav>
                <div className="page-under-construction-my" style={{backgroundImage: 'url(https://s.redefine.pl/file/o2/redefine/cp/mn/mnvtk3v2nmg4nsbr7oduraphzze83m8i.jpg)', padding: '0', borderRadius: "5px"}}>
                    <div style={{ borderRadius: "5px", width: '100%', backgroundColor: "rgba(0, 0, 0, 0.7)", fontSize: '60px', textAlign: 'center', color: "#ccc", lineHeight: '11.0'}}>
                        Witaj w VolleyShop
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;