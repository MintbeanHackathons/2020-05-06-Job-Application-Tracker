import React from 'react'
// import { connect } from 'react-redux'
// import { getJobApps, removingJobApp } from '../reducers/jobAppReducer'

class AppCard extends React.Component {

  render() {

    const { app } = this.props

    return (
      <div key={app.id}>
        {app.type}
        {app.company}
        {app.jobDescriptionURL}
        {app.notes}
      </div>
    )
  }

}

export default AppCard
