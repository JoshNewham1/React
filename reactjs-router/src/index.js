import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router";

class App extends React.Component { // Base component (all components must extend Component class)
    render() { // Component's render method (displays HTML elements on DOM)
    return ( // Can only return one root element (nested elements are fine)
        // Isn't actually HTML (JSX)
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        );
    }
}

render(<App/>, window.document.getElementById("app"));