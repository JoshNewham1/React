import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super(); // Call react component constructor
        this.state = { // Should only be initial state of props
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000)
        console.log("Constructor");
    }
    
    // Component lifecycle
    componentWillMount() { // Before initially rendering component
        console.log("Component will mount");
    }

    componentDidMount() { // After initially rendering component to DOM
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) { // When any props change for component (and it needs re-rendering)
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) { // Decides whether to update DOM
        console.log("Should component update", nextProps, nextState);
        return true; // Allow component to update
    }

    componentWillUpdate(nextProps, nextState) { // Before updating component
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() { // Before removing the component from DOM
        console.log("Component will unmount");
    }
    // End of component lifecycle

    onMakeOlder() {
        this.setState({ // Only specify changes here (forces React to consider refresh)
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name} and your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};