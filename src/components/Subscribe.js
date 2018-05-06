import React, { Component } from "react";
import { Grid, Dropdown, Input, Button } from "semantic-ui-react";
import "./style.css";

class App extends Component {
  constructor() {
    super();

    this.interestCategories = [
      { text: "Marketing", value: "Marketing" },
      { text: "Advertising", value: "Advertsing" },
      { text: "Promotion", value: "Promotion" },
      { text: "Customer Relations", value: "Custmoer Relations" }
    ];

    this.state = {
      emailInput: "",
      message: "",
      interest: "",
      buttonText: "Sign up now",
      submitted: false
    };
  }

  handleChange = (e, { name, value }) => {
    console.log(value);
    this.setState({
      [name]: value,
      message: ""
    });
  };

  validateEmail = email => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { emailInput, interest } = this.state;
    const isValid = this.validateEmail(emailInput);

    if (!isValid) {
      this.setState({
        emailInput: "",
        message: "Please enter a valid email address"
      });
      return;
    } else if (!interest) {
      this.setState({
        message: "Please select an interest"
      });
      return;
    }

    setTimeout(() => {
      this.setState({
        submitted: true,
        emailInput: "",
        interest: ""
      });
    }, 2000);

    this.setState({
      message: "",
      buttonText: "Submitting..."
    });
  };

  render() {
    const { emailInput, message, buttonText, submitted } = this.state;
    return (
      <div className="subscribe">
        <Grid>
          <Grid.Row>
            <h1>
              Stay up to date with ecommerce trends with Shopify's newsletter
            </h1>
          </Grid.Row>
          <hr />
        </Grid>
        {submitted ? (
          <Grid>
            <Grid.Row>
              <div className="thankyou">
                <h3>Thanks for subscribing</h3>
                <p>You'll start receiving free tips and resources soon.</p>
              </div>
            </Grid.Row>
          </Grid>
        ) : (
          <form>
            <Grid>
              <Grid.Row>Subscribe for free marketing tips</Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column style={{ paddingLeft: 0 }}>
                  <Input
                    name="emailInput"
                    size="medium"
                    fluid
                    value={emailInput}
                    onChange={this.handleChange}
                    placeholder="Email Address"
                  />
                </Grid.Column>
                <Grid.Column textAlign="right" style={{ paddingRight: 0 }}>
                  <Dropdown
                    name="interest"
                    icon="dropdown"
                    fluid
                    selection
                    placeholder="Interest in..."
                    onChange={this.handleChange}
                    options={this.interestCategories}
                  />
                </Grid.Column>
              </Grid.Row>
              {message ? <p className="error"> {message} </p> : ""}
              <Grid.Row>
                <Button id="button" fluid onClick={this.handleSubmit}>
                  {buttonText}
                </Button>
              </Grid.Row>
            </Grid>
          </form>
        )}
      </div>
    );
  }
}

export default App;
