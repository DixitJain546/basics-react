import React, {useState} from 'react';

function HookSetArray() {

    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: (Math.floor(Math.random() * 10) + 1)
        }])
    }
    
    return ( 
        <>
            <button onClick={addItem}>Add Numbers : </button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </>
     );
}

export default HookSetArray;