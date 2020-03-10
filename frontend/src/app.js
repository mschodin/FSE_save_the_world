import React, { Component } from "react";
import LoginPage from "./containers/LoginPage";

class App extends Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
    }
      
    //   callAPI(){
    //     fetch("http://localhost:9000/helloWorldAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res}))
    //         .catch(err => err);
    //   }
      
    //   componentDidMount(){
    //     this.callAPI();
    //   }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    // random comment
    render(){
        return React.createElement(LoginPage, {
        handleChange: this.handleChange,
        value: this.state.value
        });
    //   return (
        //   <div className="App">
        //       <p className="App-intro">{this.state.apiResponse}</p>
        //   </div>

    //   );
    }
}

export default App;
