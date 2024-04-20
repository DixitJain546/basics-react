import React, {Component} from "react";

class Counter extends Component {
 
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    addValue = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), this.logValue)
    }

    addFive = () => {
        this.addValue()
        this.addValue()
        this.addValue()
        this.addValue()
        this.addValue()
    }

    logValue() {
        console.log(`Counter : ${this.state.count}`)
    }

    render() {
        return (
            <div>
                <body>Counter: {this.state.count}</body>
                <button onClick={this.addValue}>Add</button>
                <button onClick={this.addFive}>Add 5</button>
            </div>
        )
    }

}

export default Counter