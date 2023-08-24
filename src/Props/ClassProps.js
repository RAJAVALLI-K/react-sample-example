import React, { Component } from 'react'
import ClassChildProps from './ClassChildProps'

const products = [
    { name: "Apache200", year: "2020", price: "150000", value: 0 },
    { name: "Fz250", year: "2022", price: "180000", value: 1 },
    { name: "HondaHness", year: "2021", price: "240000", value: 2 },
];
export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <div>ClassProps</div>
                {products.map((e, i) => (
                    <ClassChildProps
                        key={i}
                        element={e.name}
                        element1={e.year}
                        element2={e.price}
                        element3={e.value}
                    />
                ))}
            </div>
        )
    }
}
