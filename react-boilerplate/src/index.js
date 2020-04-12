import React from "react";
import { render } from "react-dom";

class App extends React.Component { // Base component (all components must extend Component class)
    render() { // Component's render method (displays HTML elements on DOM)
        return ( // Can only return one root element (nested elements are fine)
            <div>
                <h1>Hello!</h1>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));