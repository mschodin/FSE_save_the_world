import React, { Component } from "react";
import Login from "./Login";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import withAuth from './withAuth';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };


    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/Home" component={withAuth(Home)} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
