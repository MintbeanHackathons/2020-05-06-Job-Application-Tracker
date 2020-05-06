import React, { Component } from "react";
import firebase from "../../utils/firebase";
import { format } from "date-fns";

import TextInput from "../TextInput";

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
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      company: "Maple",
      contact: "Jane Doe",
      dateApplied: "2020-02-01",
      posting: "linkedin",
      response: "",
      role: "",
    };

    const dbRef = firebase.database().ref();
    dbRef.push(newJob);
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
    const { company, contact, dateApplied, posting, role } = this.state;

    return (
      <div className="add-application">
        <div className="container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
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
            <input
              className="add-application-date-input"
              type="date"
              onChange={(e) => {
                this.handleDateChange(e);
              }}
              value={dateApplied}
            />

            <button>Add Job</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddApplication;
