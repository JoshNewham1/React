import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component { // Base component (all components must extend Component class)
    constructor() {
        super();
        this.state = { // Initial states
            homeLink: "Home",
            homeMounted: true
        };
    }
    
    onGreet() { // Parent-child communication example
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    
    render() { // Component's render method (displays HTML elements on DOM)
    let homeComponent = "";
    if (this.state.homeMounted) {
        homeComponent = (<Home 
                            name={"Josh"} 
                            initialAge={17} 
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}
                        />);
    }
    return ( // Can only return one root element (nested elements are fine)
        // Isn't actually HTML (JSX)
            <div className="container">
                <Header homeLink={this.state.homeLink}/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComponent}
                    </div>
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Un)mount home component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));