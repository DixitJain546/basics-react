import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }

        this.greetParent = this.greetParent.bind(this)
    }
    greetParent = (childName, fromParent) => {
        fromParent ? alert(`Hello ${this.state.name} from ${childName}`) : alert(`Hello ${this.state.name} to ${childName}`)
    }

    render() {
        return(
            <div>
                <ChildComponent greetParent={this.greetParent} fromParent = "false" />
            </div>
        )
            
    }
}

export default ParentComponent