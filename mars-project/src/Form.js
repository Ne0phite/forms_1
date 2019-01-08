import React, { Component } from "react";
import originArr from "./originArr";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "1990-01-01",
      reasons: "",
      diet: "Omnivore",
      origin: "United State USA",
      formCompleted: false,
      showRes: false,
      message: false
    };
    this.baseState = this.state;

    this.changeHandler = this.changeHandler.bind(this);
    this.showResHandler = this.showResHandler.bind(this);
    this.confirmHandler = this.confirmHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  // onClick: blah(e){
  //   resetForm();
  //   confirmHandler();
  // }

  resetForm() {
    this.setState(this.baseState);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  showResHandler() {
    this.setState({
      showRes: true,
      message: false
    });
  }

  confirmHandler() {
    this.setState({
      showRes: false,
      message: true
    });
    // this.setState(this.baseState);
  }

  render() {
    let {
      name,
      date,
      reasons,
      diet,
      origin,
      formCompleted,
      showRes,
      message
    } = this.state;
    console.log(this.state);
    return (
      <div class="form-div">
        <h1>Mission to Mars Registration Form</h1>

        <form class="form" onChange={this.changeHandler}>
          <label htmlFor="name"> What is Your Name? </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            id="name"
          />

          <label htmlFor="date"> What is Your Date of Birth? </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            min="1990-01-01"
            max="2018-12-31"
          />

          <label htmlFor="origin"> What is your country of origin? </label>
          <select onChange={this.changeHandler} name="origin" value={origin}>
            {originArr.map(country => (
              <option>
                {country.name} {country.code}
              </option>
            ))}
          </select>

          <label htmlFor="diet">What is your dietary preference?</label>
          <select onChange={this.changeHandler} name="diet" value={diet}>
            <option>Omnivore</option>
            <option>Herbivore</option>
            <option>Vegan</option>
          </select>

          <label htmlFor="reasons">
            Why do you want to be a Mars explorer?
          </label>
          <input
            type="text"
            id="reasons"
            name="reasons"
            value={reasons}
            placeholder="Your Response Here"
          />
          <button type="button" onClick={this.showResHandler}>
            Submit
          </button>
        </form>

        {showRes === false ? (
          <div />
        ) : (
          <div class="response">
            <p>
              <strong>Are you sure the information is correct?</strong>
            </p>
            <p>Your name: {name}</p>
            <p>Your DOB: {date}</p>
            <p>Your Country of Origin: {origin}</p>
            <p>Your Diet Preference: {diet}</p>
            <p>Your Reasons for Going: {reasons}</p>
            <button
              onClick={event => {
                this.resetForm();
                this.confirmHandler();
              }}
            >
              Confirm
            </button>
          </div>
        )}
        {message === true ? (
          <p>Thank you for applying to go die in the empty space</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Form;
