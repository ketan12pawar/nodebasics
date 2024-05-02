import React, { Component } from "react";

class Child extends React.Component {
    constructor(props){
        console.log("Child props",props);
        super(props)
        this.state = {name:props.childrenName}

    }
    render() {
        return (
            <div>
               {this.state.name}
            </div>
        );
    }
}

export default class ClassCmp extends Component {
  constructor() {
    super();
    this.state = { email: "durgesh@mailinator.com", password: "durgesh" };
  }
  chnageEmail = () => {
    this.setState({ email: "prajapat@gmail.com" });
  };
  revertEmail = () => {
    this.setState({ email: "durgesh@mailinator.com" });
  };
  render() {
    return (
      <div>
        class component
        <h1>email is:-{this.state.email}</h1>
        <h2>password is:- {this.state.password}</h2>
        <button onClick={this.chnageEmail}>Chnage email</button>
        <br />
        <br />
        <button onClick={this.revertEmail}>Revert</button>

        <Child childrenName="universal"/>
      </div>
    );
  }
}
