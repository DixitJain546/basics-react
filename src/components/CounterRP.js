import { Component } from 'react';

class CounterRP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState(prevState => {
           return {count: prevState.count + 1}
        })
    }
    
    render() { 
        return (  
            this.props.children(this.state.count, this.incrementCounter)
        )
    }
}
 
export default CounterRP;