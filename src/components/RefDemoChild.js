import React from 'react';

const RefDemoChild = React.forwardRef((props, ref) => {
    return(
        <>
        <input type = "text" ref = {ref} />
        </>
    )
})

export default RefDemoChild
