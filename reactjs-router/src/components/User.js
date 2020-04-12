import React from "react";
import { withRouter } from "react-router-dom";


class User extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: props.match.params.id
        };
    }
    
    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.state.id}</p>
            </div>
        )
    }
}

export default withRouter(User);