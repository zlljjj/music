import React , { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className = "header">
                <div className="name">Cynnsound</div>
                <div className="tab">
                    <Link to="/tech">
                        <div className = "sub">TECH HOUSE</div>
                    </Link>
                    <Link to="/minimal">
                        <div className = "sub">MINIMAL</div>
                    </Link>
                    <Link to="/deep">
                        <div className = "sub">DEEP HOUSE</div>
                    </Link>
                    <Link to="/techno">
                        <div className = "sub">TECHNO</div>
                    </Link>
                    <Link to="/after">
                        <div className = "sub">AFTERHOUR</div>
                    </Link>
                </div>
                <div className="login">login</div>
            </div>
        )
    }
}

export default Header;