import React, { Component } from "react";
import originArr from "./originArr";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      education: {
        hs: false,
        ad: false,
        bd: false,
        md: false,
        phd: false,
        other: false
      },
      otherEdu: "",
      health: {
        cancer: false,
        hd: false,
        diabetes: false
      },
      relatives: {
        gp: false,
        siblings: false,
        parents: false
      },
      gpNum: 1,
      siblingsNum: 1,
      parentsNum: 1,
      name: "",
      date: "1990-01-01",
      reasons: "",
      diet: "Omnivore",
      origin: "United State USA",
      underwater: "",
      marital_status: "",
      difficut_sit: "",
      claustrophobic: "",
      formCompleted: false,
      showRes: false,
      message: false
    };
    this.baseState = this.state;

    this.changeHandler = this.changeHandler.bind(this);
    this.showResHandler = this.showResHandler.bind(this);
    this.confirmHandler = this.confirmHandler.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.listCountries = this.listCountries.bind(this);
    this.showResponse = this.showResponse.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.displayNumberOfRelatives = this.displayNumberOfRelatives.bind(this);
  }

  resetForm() {
    this.setState(this.baseState);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  showResHandler() {
    this.setState({
      showRes: true,
      message: false,
      formCompleted: true
    });
  }

  editForm() {
    this.setState({
      showRes: false,
      message: false,
      formCompleted: false
    });
  }

  confirmHandler() {
    this.setState({
      showRes: false,
      message: true
    });
    // this.setState(this.baseState);
  }

  listCountries() {
    let results = originArr.map(country => {
      return (
        <option key={country.code}>
          {country.name} {country.code}
        </option>
      );
    });
    return results;
  }

  handleCheckboxChange(e) {
    if (e.target.id) {
      let newState = this.state[e.target.name];
      newState[e.target.id] = e.target.checked;
      this.setState({
        [e.target.name]: newState
      });
    }
  }

  displayNumberOfRelatives(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    let newArr = arr.map(el => {
      return <option key={el}>{el}</option>;
    });
    return newArr;
  }

  showResponse() {
    let {
      name,
      date,
      reasons,
      diet,
      origin,
      showRes,
      underwater,
      difficut_sit,
      marital_status,
      claustrophobic,
      health,
      siblingsNum,
      parentsNum,
      gpNum,
      relatives,
      education,
      otherEdu
    } = this.state;
    if (showRes === true) {
      return (
        <div className="response">
          <p>
            <strong>Are you sure the information is correct?</strong>
          </p>
          <p>Your name: {name}</p>
          <p>Your DOB: {date}</p>
          <p>Your Country of Origin: {origin}</p>
          <p>Your Diet Preference: {diet}</p>
          <p>Your Reasons for Going: {reasons}</p>
          <p>Breathe underwater: {underwater}</p>
          <p>How you respond when stressed: {difficut_sit}</p>
          <p>Marital status: {marital_status}</p>
          <p>Claustrophobic: {claustrophobic}</p>
          <p>
            Health History: {health.cancer ? "Cancer" : null}{" "}
            {health.hd ? " Heart Disease" : null}
            {health.diabetes ? " Diabetes" : null}
          </p>
          <p>
            Siblings? :{" "}
            {relatives.siblings ? <span>{siblingsNum}</span> : " No"}
          </p>
          <p>
            Parents? : {relatives.parents ? <span>{parentsNum}</span> : " No"}
          </p>
          <p>Grandparents? : {relatives.gp ? <span>{gpNum}</span> : " No"}</p>
          <p>
            Education:
            {education.hs ? <span> High School </span> : null}
            {education.ad ? <span> Associate </span> : null}
            {education.bd ? <span> Bachelors </span> : null}
            {education.md ? <span> Masters </span> : null}
            {education.phd ? <span> PhD </span> : null}
            {education.other ? <span> {otherEdu} </span> : null}
          </p>
          <button
            onClick={event => {
              // this.resetForm();
              this.confirmHandler();
            }}
          >
            Confirm
          </button>
          <button onClick={this.editForm}>Go back</button>
        </div>
      );
    } else {
      return <h1>Thank you for your interest</h1>;
    }
  }

  render() {
    let {
      name,
      date,
      reasons,
      diet,
      origin,
      formCompleted,
      underwater,
      difficut_sit,
      marital_status,
      claustrophobic,
      health,
      relatives,
      gpNum,
      parentsNum,
      siblingsNum,
      education,
      otherEdu
    } = this.state;
    console.log(this.state);

    if (formCompleted === false) {
      return (
        <div className="form-div">
          <h1>Mission to Mars Registration Form</h1>
          <form className="form">
            <label htmlFor="name"> What is Your Name? </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              id="name"
              onChange={this.changeHandler}
            />
            <label htmlFor="date"> What is Your Date of Birth? </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              min="1990-01-01"
              max="2018-12-31"
              onChange={this.changeHandler}
            />
            <label htmlFor="origin"> What is your country of origin? </label>
            <select onChange={this.changeHandler} name="origin" value={origin}>
              {this.listCountries()}
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
              onChange={this.changeHandler}
            />
            <label>Can you breathe underwater for longer than 1 minute?</label>
            <div>
              <input
                checked={underwater === "Yes"}
                type="radio"
                name="underwater"
                value="Yes"
                onChange={this.changeHandler}
              />{" "}
              Yes
              <input
                checked={underwater === "No"}
                type="radio"
                name="underwater"
                value="No"
                onChange={this.changeHandler}
              />{" "}
              No
              <input
                checked={underwater === "I don't know"}
                type="radio"
                name="underwater"
                value="I don't know"
                onChange={this.changeHandler}
              />{" "}
              I don't know
            </div>
            <div>
              <label>What is your marital status?</label>
              <input
                checked={marital_status === "Single"}
                type="radio"
                name="marital_status"
                value="Single"
                onChange={this.changeHandler}
              />
              Single
              <input
                checked={marital_status === "Married"}
                type="radio"
                name="marital_status"
                value="Married"
                onChange={this.changeHandler}
              />
              Married
            </div>
            <label>
              When you are in a stressful or difficult situation, how do you
              most frequently react?
            </label>
            <div>
              <input
                checked={difficut_sit === "Determination"}
                type="radio"
                name="difficut_sit"
                value="Determination"
                onChange={this.changeHandler}
              />
              Determination: I continue to confront the situation.
            </div>
            <div>
              <input
                checked={difficut_sit === "Defeat"}
                type="radio"
                name="difficut_sit"
                value="Defeat"
                onChange={this.changeHandler}
              />
              Defeat: I stop confronting the situation.
            </div>
            <div>
              <input
                checked={difficut_sit === "Anger"}
                type="radio"
                name="difficut_sit"
                value="Anger"
                onChange={this.changeHandler}
              />
              Anger: I become upset at the situation.
            </div>
            <div>
              <input
                checked={difficut_sit === "Resourcefulness"}
                type="radio"
                name="difficut_sit"
                value="Resourcefulness"
                onChange={this.changeHandler}
              />
              Resourcefulness: I seek help to confront the situation.
            </div>
            <div>
              <label>Are you claustrophobic?</label>
              <input
                checked={claustrophobic === "Yes"}
                type="radio"
                name="claustrophobic"
                value="Yes"
                onChange={this.changeHandler}
              />
              Yes
              <input
                checked={claustrophobic === "No"}
                type="radio"
                name="claustrophobic"
                value="No"
                onChange={this.changeHandler}
              />
              No
              <input
                checked={claustrophobic === "I don't know"}
                type="radio"
                name="claustrophobic"
                value="I don't know"
                onChange={this.changeHandler}
              />
              I don't know
            </div>
            Does your family have a history of (check all that apply):
            <div>
              <p>
                Cancer{" "}
                <input
                  name="health"
                  id="cancer"
                  type="checkbox"
                  checked={health.cancer}
                  onChange={this.handleCheckboxChange}
                />
              </p>
              <p>
                Heart Disease{" "}
                <input
                  name="health"
                  id="hd"
                  type="checkbox"
                  checked={health.hd}
                  onChange={this.handleCheckboxChange}
                />
              </p>
              <p>
                Diabetes{" "}
                <input
                  name="health"
                  id="diabetes"
                  type="checkbox"
                  checked={health.diabetes}
                  onChange={this.handleCheckboxChange}
                />
              </p>
            </div>
            Do you have any living (check all that apply):
            <div>
              <p>
                Siblings?{" "}
                <input
                  name="relatives"
                  id="siblings"
                  type="checkbox"
                  checked={relatives.siblings}
                  onChange={this.handleCheckboxChange}
                />
                {relatives.siblings ? (
                  <select
                    onChange={this.changeHandler}
                    name="siblingsNum"
                    value={siblingsNum}
                  >
                    ><option disabled>How many?</option>
                    {this.displayNumberOfRelatives(10)}
                  </select>
                ) : null}
              </p>
              <p>
                Parents?{" "}
                <input
                  name="relatives"
                  id="parents"
                  type="checkbox"
                  checked={relatives.parents}
                  onChange={this.handleCheckboxChange}
                />
                {relatives.parents ? (
                  <select
                    onChange={this.changeHandler}
                    name="parentsNum"
                    value={parentsNum}
                  >
                    ><option disabled>How many?</option>
                    {this.displayNumberOfRelatives(2)}
                  </select>
                ) : null}
              </p>
              <p>
                Grandparents?{" "}
                <input
                  name="relatives"
                  id="gp"
                  type="checkbox"
                  checked={relatives.gp}
                  onChange={this.handleCheckboxChange}
                />
                {relatives.gp ? (
                  <select
                    onChange={this.changeHandler}
                    name="gpNum"
                    value={gpNum}
                  >
                    ><option disabled>How many?</option>
                    {this.displayNumberOfRelatives(4)}
                  </select>
                ) : null}
              </p>
            </div>
            Check all educational credentials you have received:
            <p>
              High School/GED
              <input
                type="checkbox"
                name="education"
                id="hs"
                checked={education.hs}
                onChange={this.handleCheckboxChange}
              />
            </p>
            <p>
              Associate Degree
              <input
                type="checkbox"
                name="education"
                id="ad"
                checked={education.ad}
                onChange={this.handleCheckboxChange}
              />
            </p>
            <p>
              Bachelor's Degree
              <input
                type="checkbox"
                name="education"
                id="bd"
                checked={education.bd}
                onChange={this.handleCheckboxChange}
              />
            </p>
            <p>
              Master's Degree
              <input
                type="checkbox"
                name="education"
                id="md"
                checked={education.md}
                onChange={this.handleCheckboxChange}
              />
            </p>
            <p>
              PhD
              <input
                type="checkbox"
                name="education"
                id="phd"
                checked={education.phd}
                onChange={this.handleCheckboxChange}
              />
            </p>
            <p>
              Other
              <input
                type="checkbox"
                name="education"
                id="other"
                checked={education.other}
                onChange={this.handleCheckboxChange}
              />{" "}
              {education.other ? (
                <input
                  type="text"
                  placeholder="Other education"
                  name="otherEdu"
                  value={otherEdu}
                  onChange={this.changeHandler}
                />
              ) : null}
            </p>
            <button type="button" onClick={this.showResHandler}>
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return this.showResponse();
    }
  }
}

export default Form;
