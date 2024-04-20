import React from "react";

function Person({person}) {
return(
<div> 
    <h1>Hi! I am {person.name} and my age is {person.age}.</h1>
    </div>
)
}

export default Person;