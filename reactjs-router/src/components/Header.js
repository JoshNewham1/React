import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component { // Stateless component
    navigate(url) {
        this.props.history.push(url);
    }
    
    render() {
        return (
            <nav className="navbar navbar-default navbar-light bg-light">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><button className="nav-link" onClick={this.navigate.bind(this, "/")}>Home</button></li>
                            <li className="nav-item"><button className="nav-link" onClick={this.navigate.bind(this, "/user/1")}>User</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default withRouter(Header);