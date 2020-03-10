import React, { Component } from 'react';


class LoginPage extends Component {
    constructor(){
      super();
      this.state = {
        message: 'loading........'
      }
    }

    componentDidMount() {
      fetch("http://localhost:9000/submitLogin")
        .then(res => res.text())
        .then(res => this.setState({message: res}))
    }

    render() {
        return React.createElement(LoginPage, {
        handleChange: this.handleChange,
        value: this.state.value
        });
    }
}

export default LoginPage;