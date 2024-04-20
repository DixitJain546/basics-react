import React, { Component } from 'react';
import UseContextChildB from './UseContextChildB'

class UserContextChildA extends Component {

    render() { 
        return (
            // <UserContextChildB />
            <UseContextChildB />
        );
    }
}
export default UserContextChildA;
