import React, { Component } from 'react';

class HoverCounterRP extends Component {

    render() {
        const {count, incrementCounter} = this.props
        return(
            <>
            <h1 onMouseOver={incrementCounter}> Hovered {count} times</h1>
            </>
        )
    }
}

export default HoverCounterRP