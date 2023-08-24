import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    constructor() {
        super();
        this.state = {
            mobiles: [
                {
                    name: "Samsung Galaxy ",
                    ram: "8GB",
                    price: 30999
                }, {
                    name: "Apple iP 14 Pro max",
                    ram: "128GB",
                    price: 127999
                }, {
                    name: "Redmi Note 12",
                    ram: "6GB",
                    price: 18999
                }, {
                    name: "Vivo Y35",
                    ram: "8GB",
                    price: 16999
                },
                {
                    name: "Vivo U20",
                    ram: "4GB",
                    price: 15000
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div>ParentClass</div>
                {this.state.mobiles.map((data, index) => (
                    <ChildClass
                        key={index}
                        name={data.name}
                        ram={data.ram}
                        price={data.price}
                    />
                ))}
            </div>
        )
    }
}
