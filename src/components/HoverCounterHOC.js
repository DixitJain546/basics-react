import React, { Component } from 'react';
import WithCounterHOC from './WithCounterHOC';

class HoverCounterHOC extends Component {

    render() {
        return(
            <>
            <h1 onMouseOver={this.props.incrementCounter}>Clicked {this.props.count} times</h1>
            </>
        )
    }
}

export default WithCounterHOC(HoverCounterHOC,10)