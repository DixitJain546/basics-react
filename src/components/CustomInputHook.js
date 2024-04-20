import React from 'react';
import useInput from '../hooks/useInput';

function CustomInputHook() {

    const [firstName, bindFirstName, resetFirstName] = useInput("")
    const [lastName, bindLastName, resetLastName] = useInput("")


    const submitHandler = e => {
        e.preventDefault()
        alert(`Hi! ${firstName}${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <input {...bindFirstName}></input>
            <input {...bindLastName}></input>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default CustomInputHook;