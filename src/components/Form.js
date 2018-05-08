// This presentational componenet is to handle the email form

import React from 'react';

const Form = ({emailInput, interest, handleChange, handleSubmit, message, categories, buttonText}) => { // This line destrucutres the props object to gain access to the values
    return (
        <form>
            <p>Subscribe for free marketing tips</p>

            <div id="formDiv">
              <input
                type="text"
                name="emailInput"
                value={emailInput}
                onChange={handleChange}
                placeholder="Email Address"
              />

              <select
                name="interest"
                className="minimal"
                value={interest}
                onChange={handleChange}
              >
                <option value="" disabled defaultValue>
                  Interested in...
                </option>
                {categories.map((interest, idx) => (
                  <option key={idx} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {message ? <p className="error"> {message} </p> : ""}

            <input
              type="submit"
              className="button"
              onClick={handleSubmit}
              value={buttonText}
            />
          </form>
    );
};


export default Form;
