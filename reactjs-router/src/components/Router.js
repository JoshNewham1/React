import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import User from "./User";

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user/:id" component={User} />
                </Switch>
            </div>
        );
    }
}