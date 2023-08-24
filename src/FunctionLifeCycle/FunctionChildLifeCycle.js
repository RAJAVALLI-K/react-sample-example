import React, { useEffect, useState } from 'react'

let timer;
const FunctionChildLifeCycle = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        timer = setInterval(() => {
            console.log("setInterval");
            setCounter((prevState) => prevState + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        return () => {
            console.log('componentwillUnmount');
            clearInterval(timer);
        }
    }, []);

    return (
        <div>FunctionChildLifeCycle {counter}</div>
    )
}

export default FunctionChildLifeCycle