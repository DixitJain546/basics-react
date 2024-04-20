import React, {useState} from 'react';

function HookCouner() {

    const [count, setCount] = useState(0)
    return(
        <button onClick={() => setCount(count + 1)}>Click : {count}</button>
    )
}

export default HookCouner