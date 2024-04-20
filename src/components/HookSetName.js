import React, {useState} from 'react';

function HookSetName() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return ( 
        <>
        <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})}/><br/>
        <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})}/><br/>
        <h1>firstName : {name.firstName} , lastName : {name.lastName}</h1>
        </>
     );
}

export default HookSetName;