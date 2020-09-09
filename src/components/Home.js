import React from 'react'
import { connect } from 'react-redux'
import { getJobApps, removingJobApp } from '../reducers/jobAppReducer'
import AppCard from './AppCard'

class Home extends React.Component {

  render() {

    const { jobApps } = this.props

    return (
      <div>
        {jobApps.map(app => {
          return (
            <AppCard app={app}/>
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
