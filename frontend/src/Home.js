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
      reqid: '',
      request: [
        { id: 1, item: 'food', amount: 2, location: 'iowa city' },
        { id: 2, item: 'wood', amount: 12, location: 'new york' },
        { id: 3, item: 'money', amount: 500, location: 'denver' },
        { id: 4, item: 'water', amount: 25, location: 'des moines' }
      ],
      donation: [
        { id: 1, item: 'food', amount: 2, location: 'iowa city' },
        { id: 2, item: 'wood', amount: 12, location: 'new york' },
        { id: 3, item: 'money', amount: 500, location: 'denver' },
        { id: 4, item: 'water', amount: 25, location: 'des moines' }
      ],
      match: [
          { item1: 'food', item2: 'food', amount: 12},
          {item1: 'money', item2: 'money', amount: 500}
            ]


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
        alert("Match submitted, Thank you!");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Error submitting match, please try again");
    });
  }

  renderTableHeader(){
    let header = Object.keys(this.state.request[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableHeaderMatches(){
    let header = Object.keys(this.state.match[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }


  renderTableDataMatches(){
    return this.state.match.map((match,index) => {
      const { id, item1, item2, amount } = match //destructuring
      return (
          <tr key={id}>
            <td>{item1}</td>
            <td>{item2}</td>
            <td>{amount}</td>
          </tr>
      )
    })
  }

  renderTableDataDonations(){
    return this.state.donation.map((donation,index) => {
      const { id, item, amount, location } = donation //destructuring
      return (
          <tr key={id}>
            <td>{id}</td>
            <td>{item}</td>
            <td>{amount}</td>
            <td>{location}</td>
          </tr>
      )
    })
  }
  renderTableDataRequests(){
    return this.state.request.map((request, index) => {
      const { id, item, amount, location } = request //destructuring
      return (
          <tr key={id}>
            <td>{id}</td>
            <td>{item}</td>
            <td>{amount}</td>
            <td>{location}</td>
          </tr>
      )
    })
  }

  render() {
    return (
        <div className="Home">
          <h1>Save The World</h1>
          <Tabs>
            <div label="Home">
              <div className = "home">
              <h2>Thank you for helping save the world!</h2>
                  <h2>Previous Matches:</h2>
              </div>
                  <table id='matches'>
                    <tbody>
                    <tr>{this.renderTableHeaderMatches()}</tr>
                    {this.renderTableDataMatches()}
                    </tbody>
                  </table>
            </div>
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
                <div className="column-don">
                  <h2>Donations</h2>
                  <table id = 'donations'>
                    <tbody>
                      <tr>{this.renderTableHeader()}</tr>
                      {this.renderTableDataDonations()}
                    </tbody>
                  </table>

                </div>
                <div className="column-middle">
                  <p> </p>
                </div>
                <div className="column-req">
                  <h2>Requests</h2>
                    <table id = 'requests'>
                      <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableDataRequests()}
                      </tbody>
                    </table>
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