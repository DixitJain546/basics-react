import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UseContextChildB() {
    
    const user = useContext(UserContext);

    return (
        <h1>{user}</h1>
      );
}

export default UseContextChildB;
