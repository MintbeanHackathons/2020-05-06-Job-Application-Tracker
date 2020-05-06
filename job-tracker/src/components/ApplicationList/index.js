import React from "react";

require("./style.scss");

const ApplicationList = (props) => {
  const { applications, handleSelect } = props;

  const renderApplicationHeader = () => {
    return (
      <>
        <li className="application-list-header-title">Company:</li>
        <li className="application-list-header-title">Role:</li>
        <li className="application-list-header-title">Contact:</li>
        <li className="application-list-header-title">Date Applied:</li>
        <li className="application-list-header-title">Source:</li>
        <li className="application-list-header-title">Response:</li>
      </>
    );
  };

  const renderApplications = () => {
    return applications.map((job) => {
      return (
        <div
          key={job.id}
          className="application-list-job"
          onClick={() => handleSelect(job)}
        >
          <li className="application-list-job-cell">{job.company}</li>
          <li className="application-list-job-cell">{job.role}</li>
          <li className="application-list-job-cell">{job.contact}</li>
          <li className="application-list-job-cell">{job.dateApplied}</li>
          <li className="application-list-job-cell">{job.posting}</li>
          <li className="application-list-job-cell">{job.response}</li>
        </div>
      );
    });
  };

  return (
    <div className="application-list">
      <div className="container">
        <div className="application-list-header">
          {renderApplicationHeader()}
        </div>
        <div className="application-list">{renderApplications()}</div>
      </div>
    </div>
  );
};

export default ApplicationList;
