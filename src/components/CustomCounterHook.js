import React from 'react';
import useCounter from '../hooks/useCounter';

function CustomCounterHook() {

    const [count, incrementCount, decrementCount, resetCount] = useCounter(10, 10)

    return ( 
        <>
            <h1>Count : {count}</h1><br />
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </>
    );
}

export default CustomCounterHook;