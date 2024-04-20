import React, {useState} from 'react';

function HookCounerSafe() {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue)


    return (  
        <>
        <div> Count : {count}</div><br />
        <button onClick={() => setCount(initialValue)}>Reset</button><br/>
        <button onClick={() => setCount(prev => prev + 1)}>+</button><br/>
        <button onClick={() => setCount(prev => prev - 1)}>-</button><br/>
        </>
    );
}

export default HookCounerSafe;