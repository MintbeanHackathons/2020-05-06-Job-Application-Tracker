import React from 'react'
import { connect } from 'react-redux'
import { getJobApps, removingJobApp } from '../reducers/jobAppReducer'

class Home extends React.Component {

  render() {

    const { jobApps } = this.props

    return (
      <div>
        {jobApps.map(app => {
          return (
            <div key={app.id}>
              {app.id}
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    this.props.getJobApps()
  }

}

const mapState = (state) => {
  return {
    jobApps: state.jobApps
  }
}

const mapDispatch = (dispatch) => {
  return {
    getJobApps: () => dispatch(getJobApps()),
    removingJobApp: (id) => dispatch(removingJobApp(id))
  }
}

export default connect(mapState, mapDispatch)(Home)
