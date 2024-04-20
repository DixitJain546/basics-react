import React, { Component } from 'react';
import RefDemoChild from './RefDemoChild';

class RefDemo extends Component {
    constructor(props) {
        super(props)
        //this.inputRef = React.createRef()
        this.childInputRef = React.createRef()
    }


    componentDidMount() {
        //this.inputRef.current.focus()
    }

    clickHandler = () => {
        //alert(this.inputRef.current.value)
    }

    forwardClickHandler = () => {
        this.childInputRef.current.focus()
    }

    render() { 
        return (
            <>
                {/* <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Read Input</button> */}
                <RefDemoChild ref = {this.childInputRef} />
                <button onClick={this.forwardClickHandler}>Focus Input</button>
            </>
        );
    }
}
 
export default RefDemo;