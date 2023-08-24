import React, { Component } from 'react'

export default class ChildClass extends Component {

    render() {
        return (
            <div className="product">
                <h3>ChildClass</h3>
                <p>Name:{this.props.name}</p>
                <p>Ram:{this.props.ram}</p>
                <p>Price:{this.props.price}</p>
            </div>
        )
    }
}
