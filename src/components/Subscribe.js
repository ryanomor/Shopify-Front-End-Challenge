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
      message: "Please enter a valid email address",
      category: "",
      button: "Sign up now"
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateEmail = email => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { emailInput, category } = this.state;
    const isValid = this.validateEmail(emailInput);

    if (!isValid) {
      this.setState({
        message: "Please enter a valid email address"
      });
      return;
    }
  };

  render() {
    const { emailInput, message, category, button } = this.state;
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

        <form>
          <Grid>
            <Grid.Row>
              <p style={{ marginTop: "3em" }}>
                Subscribe for free marketing tips
              </p>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Input
                  name="email"
                  size="medium"
                  fluid
                  input={emailInput}
                  onChange={this.handleChange}
                  placeholder="Email Address"
                />
              </Grid.Column>
              {" "}
              <Grid.Column>
                <Dropdown
                  name="category"
                  fluid
                  icon='dropdown'
                  selection
                  // value={category}
                  placeholder="Interest in..."
                  onChange={this.handleChange}
                  options={this.interestCategories}
                />
              </Grid.Column>
              {message ? <p className="error"> {message} </p> : ""}
            </Grid.Row>
            <Grid.Row>
              <Button
                id="button"
                role="button"
                fluid
                onSubmit={this.handleSubmit}
              >
                {" "}
                {button}{" "}
              </Button>
            </Grid.Row>
          </Grid>
        </form>
      </div>
    );
  }
}

export default App;
