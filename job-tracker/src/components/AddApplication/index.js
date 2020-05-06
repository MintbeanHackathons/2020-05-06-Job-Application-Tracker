import React, { Component } from "react";
import firebase from "../../utils/firebase";
import { format } from "date-fns";

import TextInput from "../TextInput";

require("./style.scss");

export class AddApplication extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      contact: "",
      dateApplied: "",
      posting: "",
      response: "",
      role: "",
      error: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { company, contact, dateApplied, posting, role } = this.state;

    if (!company || !contact || !dateApplied || !posting || !role) {
      this.setState({ error: "Please complete all fields" }, () => {
        setTimeout(() => {
          this.setState({ error: "" });
        }, 3000);
      });

      return;
    }

    const newJob = {
      company,
      contact,
      dateApplied,
      posting,
      response: "",
      role,
    };

    const dbRef = firebase.database().ref();
    dbRef.push(newJob);

    this.setState({
      company: "",
      contact: "",
      dateApplied: "",
      posting: "",
      response: "",
      role: "",
      error: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleDateChange = (e) => {
    let date = new Date(e.target.valueAsDate);
    date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    date = format(date, "yyyy-MM-dd");

    this.setState({ dateApplied: date });
  };

  render() {
    const { company, contact, dateApplied, posting, role, error } = this.state;

    return (
      <div className="add-application">
        <div className="container">
          <h2 className="add-application-title">Add Application:</h2>

          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="add-application-form"
          >
            <TextInput
              label="Company Name:"
              className="add-application-text-input"
              id="add-application-company"
              onChange={this.handleChange}
              name="company"
              value={company}
            />
            <TextInput
              label="Role:"
              className="add-application-text-input"
              id="add-application-role"
              onChange={this.handleChange}
              name="role"
              value={role}
            />
            <TextInput
              label="Source:"
              className="add-application-text-input"
              id="add-application-source"
              onChange={this.handleChange}
              name="posting"
              value={posting}
            />
            <TextInput
              label="Contact Name:"
              className="add-application-text-input"
              id="add-application-contact"
              onChange={this.handleChange}
              name="contact"
              value={contact}
            />

            <div className="add-application-date-container">
              <label
                htmlFor="add-application-date"
                className="add-application-date-label"
              >
                Date Applied:
              </label>
              <input
                id="add-application-date"
                className="add-application-date-input"
                type="date"
                onChange={(e) => {
                  this.handleDateChange(e);
                }}
                value={dateApplied}
              />
            </div>

            <button>Add Job</button>
            {error && <p className="add-application-error">{error}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default AddApplication;
