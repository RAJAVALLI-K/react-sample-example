import React, { Component } from 'react'

export default class ClassChildProps extends Component {
    render() {
        console.log('this', this.props.element);
        return (
            <div>
                <h1>ClassChildProps</h1>
                <div>
                    <p>Name:{this.props.element}</p>
                    <p>Year:{this.props.element1}</p>
                    <p>Price:{this.props.element2}</p>
                    <p>Value:{this.props.element3}</p>
                </div>
            </div>
        )
    }
}
