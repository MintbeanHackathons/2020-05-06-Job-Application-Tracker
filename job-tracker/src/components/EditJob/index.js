import React, { Component } from "react";

export class EditJob extends Component {
  render() {
    const { application, closeEdit } = this.props.job;

    return (
      <div className="edit-job">
        <div className="container">
          <h3 className="edit-job-title">Edit:</h3>

          <button onClick={closeEdit}>Close Edit</button>
        </div>
      </div>
    );
  }
}

export default EditJob;
