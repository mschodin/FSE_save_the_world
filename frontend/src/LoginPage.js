import React, { Component } from "react";
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
      }
      
      handleSubmit(event){
        alert('12345' + this.state.value);
        event.preventDefault();
      }


      render(){
          return(
            <div className="LoginPage" onSubmit={this.handleSubmit}>
              <link rel="stylesheet" href="LoginPage.css"></link>
              <h1>SAVE THE WORLD</h1>
              <form>

                <div class="container">
                  <label><b>Email:</b></label>
                  <input name="email" type="text" />
                
                  <label><b>Password:</b></label>
                  <input name="password" type="password" />
                
                  <button type="submit" onClick={this.handleSubmit}>Login</button>
                </div>
                
              </form>
            </div>
          );
      }

}

export default LoginPage;