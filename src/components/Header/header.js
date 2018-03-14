import React , { Component }from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import history from '../../history';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabVal: history.location.pathname,
        };
    }

    changeTab = (name) => {
        this.setState({
            tabVal:name
        })
    }
    render(){
        return(
            <div className = "header">
                <div className="name">Cynnsound</div>
                <div className="tab">
                    <Link to="/tech">
                        <div className = {this.state.tabVal === '/tech' ? "sub active":"sub"} onClick={this.changeTab.bind(this,'/tech')}>SONG HOUSE</div>
                    </Link>
                    <Link to="/minimal">
                        <div className = {this.state.tabVal === '/minimal' ? "sub active":"sub"} onClick={this.changeTab.bind(this,"/minimal")}>MINIMAL</div>
                    </Link>
                    <Link to="/deep">
                        <div className = {this.state.tabVal === '/deep' ? "sub active":"sub"} onClick={this.changeTab.bind(this,"/deep")}>DEEP HOUSE</div>
                    </Link>
                    <Link to="/techno">
                        <div className = {this.state.tabVal === '/techno' ? "sub active":"sub"} onClick={this.changeTab.bind(this,"/techno")}>TECHNO</div>
                    </Link>
                    <Link to="/after">
                        <div className = {this.state.tabVal === '/after' ? "sub active":"sub"} onClick={this.changeTab.bind(this,"/after")}>AFTERHOUR</div>
                    </Link>
                </div>
                <div className="login">login</div>
            </div>
        )
    }
};

export default Header;