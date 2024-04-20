import React, {useReducer} from 'react';
import GlobalCounterChildA from './GlobalCounterChildA';
import GlobalCounterChildB from './GlobalCounterChildB';
import { CounterContext } from '../App';

function GlobalCounterParent() {

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
        <div>
            <h1>Count : {count}</h1>
            <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
                <GlobalCounterChildA />
                <GlobalCounterChildB />
            </CounterContext.Provider>
        </div>
     );
}

export default GlobalCounterParent