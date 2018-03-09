import React , { Component } from 'react';
import './header.css'

class Header extends Component {
    render(){
        return(
            <div className = "header">
                <div className="name">Cynnsound</div>
                <div className="tab">
                    <div className = "sub">TECH HOUSE</div>
                    <div className = "sub">MINIMAL</div>
                    <div className = "sub">DEEP HOUSE</div>
                    <div className = "sub">TECHNO</div>
                    <div className = "sub">AFTERHOUR</div>
                </div>
                <div className="login">login</div>
            </div>
        )
    }
}

export default Header;