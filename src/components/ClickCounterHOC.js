import React, { Component } from 'react';
import WithCounterHOC from './WithCounterHOC';

class ClickCounterHOC extends Component {

    render() {
        const {count, incrementCounter, name} = this.props
        return(
            <>
            <button onClick={incrementCounter}>{name} Clicked {count} times</button>
            </>
        )
    }
}

export default WithCounterHOC(ClickCounterHOC, 5)