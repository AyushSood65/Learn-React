import React, { Component } from "react";

class Welcome extends Component {
    render(props) {
        return (
        <h1>Hello {this.props.name} From Class</h1>)
    }
}

export default Welcome