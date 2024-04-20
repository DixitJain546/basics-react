import React, {useCallback, useState} from 'react';
import Count from './Count';
import Button from './Button';

function ExampleCallBack() {

const [age, setAge] = useState(25)
const [salary, setSalary] = useState(100000)

const incrementAge = useCallback(() => {
    setAge(age+1)
}, [age]) 

const incrementSalary = useCallback(() => {
    setSalary(salary+10000)
}, [salary])

    return ( 
        <>
        <div>
            <Count text="Age" count={age}/><br/>
            <Button clickHandler={incrementAge}>Increment Age</Button>
        </div>
        <div>
            <Count text="Salary" count={salary}/><br/>
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    </>
     );
}

export default ExampleCallBack;