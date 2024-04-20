import React, {Component} from "react";

class RegComp extends Component {

    render() {
        console.log("Regular comp rendered")
        return(
            <h1> Regular Comp {this.props.name} </h1>
        )
    }

}

export default RegComp