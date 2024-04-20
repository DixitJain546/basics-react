import React, {useContext} from 'react';
import { CounterContext } from '../App';

function GlobalCounterChildA() {
    const counterContext = useContext(CounterContext)
    return ( 
        <div>
            <h1>Child A : </h1>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
        </div>
     );
}

export default GlobalCounterChildA;