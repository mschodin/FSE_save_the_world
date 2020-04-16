import React, { Component } from "react";
import './containers/Register.css';

export default class Register extends Component {
    
      constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          repeatpassword: ''
        };
      }

      validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      registerUser = (event) => {
        event.preventDefault();
        fetch('http://localhost:9000/register', {
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
          alert('Error registering user, please try again');
        });
      }

      login = (event) => {
        event.preventDefault();
        this.props.history.push('/');
      }

      submitRegister = (event) => {
          if(this.state.password !== this.state.repeatpassword){
              alert("Password does not match");
          }
          else{
              this.registerUser(event);
          }
      }

      render() {
        return(
          <div className="LoginPage">
            <h1>SAVE THE WORLD</h1>
            <form onSubmit={this.submitRegister}>
  
              <div className="container">
                <label><b>Email:</b></label>
                <input name="email" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value})}/>
              
                <label><b>Password:</b></label>
                <input name="password" type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value})} />

                <label class="repeat"><b>Repeat Password:</b></label>
                <input name="repeatpassword" type="password" value={this.state.repeatpassword} onChange={e => this.setState({ repeatpassword: e.target.value})} />
              
                <button type="submit" disabled={!this.validateForm}>Register</button>
              </div>
              
            </form>

            <form onSubmit={this.login}>
              <div className="container">
                <button class="login">Back to Login</button>
              </div>
            </form>
          </div>
        )
      }
}