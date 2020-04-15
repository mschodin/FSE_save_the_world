import React, { Component } from "react";
import Login from "./Login";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";
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
    }
}

export default App;
