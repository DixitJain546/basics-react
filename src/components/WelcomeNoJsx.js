import React from "react";

const WelcomeNoJsx = (props) => {
    return (
        React.createElement('div', {style: {color: "cyan"}}, React.createElement("h1", null, `${props.name}, Welcome to the code without JSX.`))
    )
}

export default WelcomeNoJsx