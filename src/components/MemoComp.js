import React from "react";

function MemoComp({name}) {
    console.log("Memo comp rendered")
    return(
        <h1>Memo Comp {name}</h1>
    )
}

export default React.memo(MemoComp)