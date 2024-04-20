import React, { Component } from 'react';
import { UserContextConsumer } from './UserContext';

class UserContextChildB extends Component {

    render() { 
        return (
            <UserContextConsumer>
                { userName => {
                        return <h1>Hello {userName}</h1>
                    }
                }
            </UserContextConsumer>
        );
    }
}
export default UserContextChildB;
