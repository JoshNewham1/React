import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}

export default withRouter(Home);