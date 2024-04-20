import React from 'react';

const Count = ({text, count}) => {
    console.log(`Rendering - Count ${text}`)
    return (<h1>{text} : {count}</h1>);
}

export default React.memo(Count);