import React from 'react'
import FunctionChildProps from './FunctionChildProps'

const FunctionProps = () => {
    const products = [
        { name: "Apache200", year: "2020", price: "150000", value: 0 },
        { name: "Fz250", year: "2022", price: "180000", value: 1 },
        { name: "HondaHness", year: "2021", price: "240000", value: 2 },
    ];

    return (
        <div className="App">
            <h3>Parent</h3>
            {products.map((data, i) => (
                <FunctionChildProps obj={data} key={i} />
            ))}
        </div>
    );
}

export default FunctionProps