import React, { Component } from 'react';
import Tabs from "./Tabs";
import "./Home.css";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      requestItem: '',
      requestAmount: '',
      requestLocation: '',
      pledgeItem: '',
      pledgeAmount: '',
      pledgeLocation: '',
      donid: '',
      reqid: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:9000/home', {
      credentials: 'include'
    })
        .then(res => res.text())
        .then(res => this.setState({message: res}));
  }

  handleRequest = (event) => {
    event.preventDefault();
    fetch('http://localhost:9000/newrequest', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: this.state.requestItem, 
        amount: this.state.requestAmount,
        location: this.state.requestLocation
      })
    })
    .then (res => {
      if(res.status === 200) {
        alert("Request submitted!");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error submitting request, please try again");
    });
  }

  handlePledge = (event) => {
    event.preventDefault();
    fetch('http://localhost:9000/newdonation', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: this.state.pledgeItem, 
        amount: this.state.pledgeAmount,
        location: this.state.pledgeLocation
      })
    })
    .then (res => {
      if(res.status === 200) {
        alert("Pledge submitted, Thank you!");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error submitting pledge, please try again");
    });
  }

  handleMatch = (event) => {
    event.preventDefault();
    fetch('http://localhost:9000/makematch', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id1: this.state.donid, 
        type1: "donation",
        id2: this.state.reqid,
        type2: "request"
      })
    })
    .then (res => {
      if(res.status === 200) {
        alert("Pledge submitted, Thank you!");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error submitting pledge, please try again");
    });
  }

  render() {
    return (
        <div className="Home">
          <h1>Save The World</h1>
          <Tabs>
            <div label="Home">Thank you for helping save the world!</div>
            <div label="Request">
              <form onSubmit={this.handleRequest}>

                <div className="container">
                  <label><b>Item:</b></label>
                  <input name="item" type="text" value={this.state.requestItem} onChange={e => this.setState({ requestItem: e.target.value})}/>

                  <label><b>Amount:</b></label>
                  <input name="amount" type="text" value={this.state.requestAmount} onChange={e => this.setState({ requestAmount: e.target.value})} />

                  <label><b>Location:</b></label>
                  <input name="location" type="text" value={this.state.requestLocation} onChange={e => this.setState({ requestLocation: e.target.value})} />

                  <button type="submit">Submit Request</button>
                </div>

              </form>
            </div>
            <div label="Pledge">
              <form onSubmit={this.handlePledge}>

                <div className="container">
                  <label><b>Item:</b></label>
                  <input name="item" type="text" value={this.state.pledgeItem} onChange={e => this.setState({ pledgeItem: e.target.value})}/>

                  <label><b>Amount:</b></label>
                  <input name="amount" type="text" value={this.state.pledgeAmount} onChange={e => this.setState({ pledgeAmount: e.target.value})} />

                  <label><b>Location:</b></label>
                  <input name="location" type="text" value={this.state.pledgeLocation} onChange={e => this.setState({ pledgeLocation: e.target.value})} />

                  <button type="submit">Submit Donation</button>
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
              <form onSubmit={this.handleMatch}>

                <div className="container">
                  <label><b>Donation Id:</b></label>
                  <input name="donid" type="text" value={this.state.donid} onChange={e => this.setState({ donid: e.target.value})}/>

                  <label><b>Request Id:</b></label>
                  <input name="reqid" type="text" value={this.state.reqid} onChange={e => this.setState({ reqid: e.target.value})} />

                  <button type="submit">Match Donation and Request</button>
                </div>

              </form>
            </div>
          </Tabs>
        </div>
    );
  }
}