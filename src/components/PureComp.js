import React, {PureComponent} from "react";

class PureComp extends PureComponent {

    render() {
        console.log("Pure comp rendered")
        return(
            <h1> Pure Comp {this.props.name} </h1>
        )
    }

}

export default PureComp