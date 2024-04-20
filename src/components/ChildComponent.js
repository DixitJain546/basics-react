import React from "react";

const ChildComponent = (props) => {
    return(
        <div>
            <button onClick={() => props.greetParent("Child", props.fromParent)}>Click Here</button>
        </div>
    )
}




export default ChildComponent;