import React, {Component} from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp"

class ParentComp extends Component {

    constructor() {
        super()

        this.state = {
            name: "Dixit"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Dixit"
            })
        }, 2000)
    }


    render () {
        console.log("Parent comp rendered")
        return(
            <>
            {/* <PureComp name={this.state.name} /> */}
            {/* <RegComp name={this.state.name} /> */}
            <MemoComp name={this.state.name}/>
            </>
        )
    }

}

export default ParentComp