import React, { Component } from 'react'
import ChildClass from './ChildClass';

export default class LifeCycle extends Component {
    // Initial //
    constructor() {
        super();
        this.state = {
            name: "raji",
            show: true
        };
    }
    // componentWillMount() depricated not using
    //   componentWillMount(){
    //      alert('ComponentWillMount');
    //   }
    //only once calling componenDidMount//
    componentDidMount() {
        setTimeout(() => {
            console.log("ComponentDidMount");
            console.log({ name: "raji" });
            this.setState({ name: " raji" });
        }, 3000);
    }
    componentDidUpdate() {
        console.log("ComponentDidUpdate");
        console.log(this.state.name);
    }
    // shouldComponentUpdate() {
    //   return false;
    // }
    render() {
        //alert('render');
        return (
            <div>
                <h1> {this.state.name}</h1>
                {this.state.show && <ChildClass n={this.state.name} />}
                <button onClick={() => this.setState({ name: 'rajavalii' })}> Update Name</button>
            </div >
        );
    }
}
