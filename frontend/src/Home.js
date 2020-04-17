import React, { Component } from 'react';
import Tabs from "./Tabs";
import "./Home.css";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('http://localhost:9000/home', {
      credentials: 'include'
    })
        .then(res => res.text())
        .then(res => this.setState({message: res}));
  }

  render() {
    return (
        <div className="Home">
          <h1>Save The World</h1>
          <Tabs>
            <div label="Home">Thank you for helping save the world!</div>
            <div label="Request">
              <form onSubmit={this.submitRequest}>

                <div className="container">
                  <label><b>Item:</b></label>
                  <input name="item" type="text" value={this.state.item} onChange={e => this.setState({ item: e.target.value})}/>

                  <label><b>Amount:</b></label>
                  <input name="amount" type="text" value={this.state.amount} onChange={e => this.setState({ amount: e.target.value})} />

                  <label><b>Location:</b></label>
                  <input name="location" type="text" value={this.state.location} onChange={e => this.setState({ location: e.target.value})} />

                  <button type="submit" disabled={!this.validateForm}>Submit Request</button>
                </div>

              </form>
            </div>
            <div label="Pledge">
              <form onSubmit={this.submitRequest}>

                <div className="container">
                  <label><b>Item:</b></label>
                  <input name="item" type="text" value={this.state.item} onChange={e => this.setState({ item: e.target.value})}/>

                  <label><b>Amount:</b></label>
                  <input name="amount" type="text" value={this.state.amount} onChange={e => this.setState({ amount: e.target.value})} />

                  <label><b>Location:</b></label>
                  <input name="location" type="text" value={this.state.location} onChange={e => this.setState({ location: e.target.value})} />

                  <button type="submit" disabled={!this.validateForm}>Submit Donation</button>
                </div>

              </form>
            </div>
            <div label="Match">
              <div class="row">
                <div class="column-don">
                  <h2>Donations</h2>
                  <div class="row">
                    <div class="column">
                      <p>id</p>
                    </div>
                    <div class="column">
                      <p>item</p>
                    </div>
                    <div class="column">
                      <p>amount</p>
                    </div>
                    <div class="column">
                      <p>location</p>
                    </div>
                  </div>
                </div>
                <div class="column-middle">
                  <p> </p>
                </div>
                <div class="column-req">
                  <h2>Requests</h2>
                  <div class="row">
                    <div class="column">
                      <p>id</p>
                    </div>
                    <div class="column">
                      <p>item</p>
                    </div>
                    <div class="column">
                      <p>amount</p>
                    </div>
                    <div class="column">
                      <p>location</p>
                    </div>
                  </div>
                </div>

              </div>
              <br></br>
              <br></br>
              <form onSubmit={this.submitRequest}>

                <div className="container">
                  <label><b>Donation Id:</b></label>
                  <input name="donid" type="text" value={this.state.donid} onChange={e => this.setState({ donid: e.target.value})}/>

                  <label><b>Request Id:</b></label>
                  <input name="reqid" type="text" value={this.state.reqid} onChange={e => this.setState({ reqid: e.target.value})} />

                  <button type="submit" disabled={!this.validateForm}>Match Donation and Request</button>
                </div>

              </form>
            </div>
          </Tabs>
        </div>
    );
  }
}