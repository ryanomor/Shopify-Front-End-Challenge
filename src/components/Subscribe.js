import React, { Component } from "react";
import Thanks from "./Thanks";
import Form from "./Form";
import "./style.css";

class App extends Component {
  constructor() {
    super();

    this.interestCategories = [
      "Marketing",
      "Advertising",
      "Promotion",
      "Customer Relations"
    ];

    this.state = {
      emailInput: "",
      message: "",
      interest: "",
      buttonText: "Sign up now",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
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
    const { emailInput, message, interest, buttonText, submitted } = this.state;
    return (
      <div className="subscribe">
        <h1>Stay up to date with ecommerce trends with Shopify's newsletter</h1>
        <hr />

        {submitted ? (
          <Thanks /> // render the thank you component if submitted is true
        ) : (
          // render the form component if submitted is false
          <Form 
            emailInput={emailInput}
            interest={interest}
            handleChange={this.handleChange}
            message={message}
            categories={this.interestCategories}
            handleSubmit={this.handleSubmit}
            buttonText={buttonText}
          />
        )}
      </div>
    );
  }
}

export default App;