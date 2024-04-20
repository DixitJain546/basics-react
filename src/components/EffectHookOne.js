import React, {useState, useEffect} from 'react';


function EffectHookOne() {

const [count, setCount] = useState(0)

useEffect( () => {
document.title = `Clicked ${count} times`
})

    return ( <button onClick={() => setCount(prev => prev + 1)}>Clicked : {count} </button> );
}

export default EffectHookOne;