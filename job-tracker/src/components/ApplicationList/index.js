import React from "react";
import firebase from "../../utils/firebase";
import Loader from "../Loader";

require("./style.scss");

const ApplicationList = (props) => {
  const { applications, handleEdit, loading } = props;

  const renderApplicationHeader = () => {
    return (
      <>
        <li className="application-list-header-title">Company:</li>
        <li className="application-list-header-title">Role:</li>
        <li className="application-list-header-title">Contact:</li>
        <li className="application-list-header-title">Date Applied:</li>
        <li className="application-list-header-title">Source:</li>
        <li className="application-list-header-title">Response:</li>
        <li className="application-list-header-title">Delete</li>
        <li className="application-list-header-title">Edit</li>
      </>
    );
  };

  const handleDelete = (id) => {
    const dbRef = firebase.database().ref();
    dbRef.child(id).remove();
  };

  const renderApplications = () => {
    return applications.map((job) => {
      return (
        <div key={job.id} className="application-list-job">
          <li className="application-list-job-cell">{job.company}</li>
          <li className="application-list-job-cell">{job.role}</li>
          <li className="application-list-job-cell">{job.contact}</li>
          <li className="application-list-job-cell">{job.dateApplied}</li>
          <li className="application-list-job-cell">{job.posting}</li>
          <li className="application-list-job-cell">{job.response}</li>
          <li className="application-list-job-cell">
            <button
              className="application-list-edit"
              onClick={() => handleEdit(job)}
            >
              Edit
            </button>
          </li>
          <li className="application-list-job-cell">
            <button
              className="application-list-delete"
              onClick={() => handleDelete(job.id)}
            >
              Delete
            </button>
          </li>
        </div>
      );
    });
  };

  return (
    <div className="application-list">
      <div className="container">
        <h2 className="application-list-title">Your Applications:</h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="application-list-header">
              {renderApplicationHeader()}
            </div>
            <div className="application-list">{renderApplications()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
