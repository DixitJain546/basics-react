import React from 'react';

function ErrorTestChild(props) {
    if(props.hero === "Joker") {
        throw Error("Name Joker")
    } 
        return(
            <h1>{props.hero}</h1>
        )
}

export default ErrorTestChild
