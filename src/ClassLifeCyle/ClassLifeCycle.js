import React, { Component } from 'react'
import ClassChildLifeCycle from './ClassChildLifeCycle'

export default class ClassLifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            name: "JS",
            show: true,
        }
        console.log("constructor");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    myfun() {
        this.setState({ name: "rajiii" }, () => {
            console.log(this.state.name);
        });
    }
    render() {
        console.log("render");
        return (
            <div>
                {this.state.name}
                <button onClick={this.myfun.bind(this)}>Update Name</button>
                <button onClick={() => this.setState({ show: !this.state.show })}>show/hide </button>
                {this.state.show ? <ClassChildLifeCycle /> : null}
            </div>
        );

    }
}
