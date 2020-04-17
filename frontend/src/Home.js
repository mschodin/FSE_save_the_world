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
              <div className="Form">
                <form
                    name="myForm"
                    action="/action_page.php"
                    onsubmit="return validateForm()"
                    method="post"
                >
                  <b>Item:</b> <input type="text" name="item-input" />
                  <br />
                  <b>Amount:</b> <input type="text" name="amount-input" />
                  <br />
                  <b>Location:</b> <input type="text" name="location-input" />
                  <br />
                  <br />
                  <button type="submit" font-size="30px">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
            <div label="Pledge">
              <div className="Form">
                <form
                    name="myForm"
                    action="/action_page.php"
                    onsubmit="return validateForm()"
                    method="post"
                >
                  <b>Item:</b> <input type="text" name="item-input" />
                  <br />
                  <b>Amount:</b> <input type="text" name="amount-input" />
                  <br />
                  <b>Location:</b> <input type="text" name="location-input" />
                  <br />
                  <br />
                  <button type="submit" disabled={!this.validateForm}>
                    Pledge Item
                  </button>
                </form>
              </div>
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
              <div className="Form">
                <form
                    name="myForm"
                    action="/action_page.php"
                    onSubmit="return validateForm()"
                    method="post"
                >
                  <b>Donation Id:</b><input type="text" name="don-id-input" />
                  <br />
                  <b>Request Id:</b><input type="text" name="req-id-input" />
                  <br />
                  <br />
                  <button type="submit" disabled={!this.validateForm}>
                    Match Items
                  </button>
                </form>
              </div>
            </div>
          </Tabs>
        </div>
    );
  }
}