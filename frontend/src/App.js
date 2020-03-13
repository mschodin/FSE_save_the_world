import React, { Component } from "react";
import Login from "./Login";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";
import withAuth from './'

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


    render(){

        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/Home">Home</Link></li>
                    </ul>

                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/Home" component={withAuth(Home)} />
                    </Switch>
                </div>
            </Router>
        );

        ///////////// THIS RETURNS A CREATED COMPONENT /////////////////
        // return React.createElement(LoginPage, {
        // handleChange: this.handleChange,
        // value: this.state.value
        // });


        ////////// THIS RETURNS AN API RESPONSE //////////////
    //   return (
        //   <div className="App">
        //       <p className="App-intro">{this.state.apiResponse}</p>
        //   </div>

    //   );
    }
}

export default App;
