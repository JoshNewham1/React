import React from "react";

export const Header = (props) => { // Stateless component
    return (
        <nav className="navbar navbar-nav navbar-light bg-light">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">{props.homeLink}</a></li>
                </ul>
            </div>
        </nav>
    );
};