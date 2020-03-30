import React, { useState } from "react";
import './LoginPage.css';

export default function LoginPage(props) {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      

      function validateForm(){
        return email.length > 0 && password.length > 0;
      }

      function submitLogin(){
        console.log("Submitting username: ", email, " Submitting password: ", password);
        fetch('http://localhost:9000/authenticate', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            e: email, 
            p: password,
          })
        })
        .then (res => {
          if(res.status === 200) {
            this.props.history.push('/');
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

      function handleSubmit(event){
        event.preventDefault();
        //callAPI();
        submitLogin();
      }

      return(
        <div className="LoginPage">
          <h1>SAVE THE WORLD</h1>
          <form onSubmit={handleSubmit}>

            <div class="container">
              <label><b>Email:</b></label>
              <input name="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            
              <label><b>Password:</b></label>
              <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            
              <button type="submit" disabled={!validateForm()}>Login</button>
            </div>
            
          </form>
        </div>
      )
}

