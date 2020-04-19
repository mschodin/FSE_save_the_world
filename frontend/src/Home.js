import React, { Component } from 'react';
import Tabs from "./Tabs";
import "./Home.css";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
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

  renderTableHeader(){
    let header = Object.keys(this.state.request[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
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