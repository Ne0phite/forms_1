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
        cancer: "",
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
    window.location.reload(true);
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
    debugger;
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
          <div>
            <button
              className="confirm-page-buttons"
              onClick={event => {
                this.confirmHandler();
              }}
            >
              Confirm
            </button>
            <button onClick={this.editForm}>Go back</button>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1>Thank you for your interest</h1>
          <button onClick={this.resetForm}>Reset Application</button>
        </>
      );
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
            <div className="form-element">
              <label htmlFor="name"> What is Your Name? </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                id="name"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-element">
              <label htmlFor="date">What is Your Date of Birth? </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                min="1990-01-01"
                max="2018-12-31"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-element">
              <label htmlFor="origin"> What is your country of origin? </label>
              <select
                onChange={this.changeHandler}
                name="origin"
                value={origin}
              >
                {this.listCountries()}
              </select>
            </div>
            <div className="form-element">
              <label htmlFor="diet">What is your dietary preference?</label>
              <select onChange={this.changeHandler} name="diet" value={diet}>
                <option>Omnivore</option>
                <option>Herbivore</option>
                <option>Vegan</option>
              </select>
            </div>
            <div className="form-element">
              <label htmlFor="reasons">
                Why do you want to be a Mars explorer?
              </label>
              <input
                type="text"
                id="reasons"
                name="reasons"
                value={reasons}
                // placeholder="Your Response Here"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-element">
              <label>
                Can you breathe underwater for longer than 1 minute?
              </label>
              <div>
                <input
                  checked={underwater === "Yes"}
                  type="radio"
                  name="underwater"
                  value="Yes"
                  onChange={this.changeHandler}
                />{" "}
                <span>Yes</span>
                <input
                  checked={underwater === "No"}
                  type="radio"
                  name="underwater"
                  value="No"
                  onChange={this.changeHandler}
                />{" "}
                <span>No</span>
                <input
                  checked={underwater === "I don't know"}
                  type="radio"
                  name="underwater"
                  value="I don't know"
                  onChange={this.changeHandler}
                />{" "}
                <span>I don't know</span>
              </div>
            </div>
            <div className="form-element">
              <label>What is your marital status?</label>
              <input
                checked={marital_status === "Single"}
                type="radio"
                name="marital_status"
                value="Single"
                onChange={this.changeHandler}
              />
              <span>Single</span>
              <input
                checked={marital_status === "Married"}
                type="radio"
                name="marital_status"
                value="Married"
                onChange={this.changeHandler}
              />
              <span>Married</span>
            </div>
            <div className="form-element">
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
                <span>
                  Determination: I continue to confront the situation.
                </span>
              </div>
              <div>
                <input
                  checked={difficut_sit === "Defeat"}
                  type="radio"
                  name="difficut_sit"
                  value="Defeat"
                  onChange={this.changeHandler}
                />
                <span>Defeat: I stop confronting the situation.</span>
              </div>
              <div>
                <input
                  checked={difficut_sit === "Anger"}
                  type="radio"
                  name="difficut_sit"
                  value="Anger"
                  onChange={this.changeHandler}
                />
                <span>Anger: I become upset at the situation.</span>
              </div>
              <div>
                <input
                  checked={difficut_sit === "Resourcefulness"}
                  type="radio"
                  name="difficut_sit"
                  value="Resourcefulness"
                  onChange={this.changeHandler}
                />
                <span>
                  Resourcefulness: I seek help to confront the situation.
                </span>
              </div>
            </div>
            <div className="form-element">
              <label>Are you claustrophobic?</label>
              <div>
                <input
                  checked={claustrophobic === "Yes"}
                  type="radio"
                  name="claustrophobic"
                  value="Yes"
                  onChange={this.changeHandler}
                />
                <span>Yes</span>
                <input
                  checked={claustrophobic === "No"}
                  type="radio"
                  name="claustrophobic"
                  value="No"
                  onChange={this.changeHandler}
                />
                <span>No</span>
                <input
                  checked={claustrophobic === "I don't know"}
                  type="radio"
                  name="claustrophobic"
                  value="I don't know"
                  onChange={this.changeHandler}
                />
                <span>I don't know</span>
              </div>
            </div>
            <div className="form-element">
              <label>
                Does your family have a history of (check all that apply):
              </label>
              <div>
                <input
                  name="health"
                  id="cancer"
                  type="checkbox"
                  checked={health.cancer}
                  onChange={this.handleCheckboxChange}
                />
                <span>Cancer</span>
                <input
                  name="health"
                  id="hd"
                  type="checkbox"
                  checked={health.hd}
                  onChange={this.handleCheckboxChange}
                />
                <span>Heart Disease</span>
                <input
                  name="health"
                  id="diabetes"
                  type="checkbox"
                  checked={health.diabetes}
                  onChange={this.handleCheckboxChange}
                />
                <span>Diabetes</span>
              </div>
            </div>
            <div className="form-element">
              <label>Do you have any living (check all that apply):</label>
              <div>
                <input
                  name="relatives"
                  id="siblings"
                  type="checkbox"
                  checked={relatives.siblings}
                  onChange={this.handleCheckboxChange}
                />
                <span>Siblings?</span>
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
              </div>
              <div>
                <input
                  name="relatives"
                  id="parents"
                  type="checkbox"
                  checked={relatives.parents}
                  onChange={this.handleCheckboxChange}
                />
                <span>Parents?</span>
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
              </div>
              <div>
                <input
                  name="relatives"
                  id="gp"
                  type="checkbox"
                  checked={relatives.gp}
                  onChange={this.handleCheckboxChange}
                />
                <span>Grandparents?</span>
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
              </div>
            </div>
            <div className="form-element">
              <label>
                Check all educational credentials you have received:
              </label>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="hs"
                  checked={education.hs}
                  onChange={this.handleCheckboxChange}
                />
                <span>High School/GED</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="ad"
                  checked={education.ad}
                  onChange={this.handleCheckboxChange}
                />
                <span>Associate Degree</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="bd"
                  checked={education.bd}
                  onChange={this.handleCheckboxChange}
                />
                <span>Bachelor's Degree</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="md"
                  checked={education.md}
                  onChange={this.handleCheckboxChange}
                />
                <span>Master's Degree</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="phd"
                  checked={education.phd}
                  onChange={this.handleCheckboxChange}
                />
                <span>PhD</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="education"
                  id="other"
                  checked={education.other}
                  onChange={this.handleCheckboxChange}
                />
                <span>Other</span>
                {education.other ? (
                  <input
                    type="text"
                    placeholder="Other education"
                    name="otherEdu"
                    value={otherEdu}
                    onChange={this.changeHandler}
                  />
                ) : null}
              </div>
            </div>
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
