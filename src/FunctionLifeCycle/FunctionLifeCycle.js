import React, { useEffect, useState } from 'react'
import FunctionChildLifeCycle from './FunctionChildLifeCycle'

const FunctionLifeCycle = () => {
    const [name, setName] = useState('JS');
    const [show, setShow] = useState(true)

    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate', name);
    }, [name]);

    return (
        <div>
            <div>FunctionLifeCycle{name}{""}</div>
            <button onClick={() => setName('Rajavalli')}>UpdateName</button>
            <button onClick={() => setShow(!show)}> show/hide </button>
            {show ? <FunctionChildLifeCycle /> : null}

        </div>
    )
}

export default FunctionLifeCycle