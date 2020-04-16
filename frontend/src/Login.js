import React, { Component } from "react";
import './containers/LoginPage.css';

export default class Login extends Component {
    
      constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: ''
        };
      }
      

      validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      submitLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:9000/authenticate', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            e: this.state.email, 
            p: this.state.password,
          })
        })
        .then (res => {
          if(res.status === 200) {
            this.props.history.push('/home');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.submitLogin(event);
      }

      render() {
        return(
          <div className="LoginPage">
            <h1>SAVE THE WORLD</h1>
            <form onSubmit={this.submitLogin}>
  
              <div className="container">
                <label><b>Email:</b></label>
                <input name="email" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value})}/>
              
                <label><b>Password:</b></label>
                <input name="password" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value})} />
              
                <button type="submit" disabled={!this.validateForm}>Login</button>
              </div>
              
            </form>
          </div>
        )
      }
}