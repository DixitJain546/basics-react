import React, {useReducer} from 'react';

function CounterReducer() {
    const initialValue = 0
    const reducer = (state, action) => {
        switch(action) {
            case 'increment': return state + 1
            case 'decrement': return state - 1
            case 'reset': return initialValue
            default: return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialValue)
    
    return ( 
        <>
            <div> Count : {count}</div><br />
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </>
    );
}

export default CounterReducer;