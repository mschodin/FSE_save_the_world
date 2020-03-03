import React, { Component } from "react";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
      }

      callAPI(){
          fetch("http://localhost:9000/helloWorldAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res}))
          .catch(err => err);
      }

      componentDidMount(){
        this.callAPI();
      }

      render(){
          return(
            <div className="NavBar">
                <p className="Nav-intro">{this.state.apiResponse}</p>
            </div>
          );
      }

}

export default NavBar;