import React, { Component } from 'react';


const WithCounterHOC = (WrappedComponent, incNo) => {

class WithCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
    }
}

    incrementCounter = () => {
        this.setState(prevState => {
           return {count: prevState.count + incNo}
        })
    }
    
    function 
    render() { 
        return (  
            <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}/>
        );
    }
}
return WithCounter
}
 
export default WithCounterHOC;