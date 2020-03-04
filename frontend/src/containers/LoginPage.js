import React, { useState } from "react";
import './LoginPage.css';

export default function LoginPage(props) {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      function validateForm(){
        return email.length > 0 && password.length > 0;
      }

      function handleSubmit(event){
        alert("ASDFASDFASDF");
        event.preventDefault();
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