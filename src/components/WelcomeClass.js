import React, {Component} from "react";

class WelcomeClass extends Component {

    constructor () {
        super()
        this.state = {
            name: "Guest"
        }
    }

    changeState() {
        this.setState({
            name: "Dixit"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}, Welcome to the Class Component..</h1>
                <button onClick = {() => {this.changeState()}}>Subscribe</button>
            </div>
        )
    }
}

export default WelcomeClass;