import React, { Component } from 'react'

let interval;
export default class ClassChildLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      age: 23
    }
  }
  componentDidMount() {
    console.log('child component componentDidMount');
  }
  componentDidUpdate() {
    console.log('Child Component ComponentDidUpdate');
  }
  shouldComponentUpdate(updateprops, updatestate) {
    console.log('updateProps', updateprops, 'updateState', updatestate, this.state);
    if (this.state.age !== updatestate.age) {
      return true
    }
    else {
      return false
    }
  }
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {

    console.log('Child render');
    return (
      <div>
        <h1> Age :{this.state.age}</h1>
        <button onClick={() => this.setState({ age: 25 })}>Update Age</button>
      </div>
    )

  }
}
