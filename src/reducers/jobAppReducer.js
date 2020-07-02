import Axios from 'axios'

// Action Types:

export const GOT_JOBAPPS_FROM_SERVER='GOT_JOBAPPS_FROM_SERVER'
export const ADD_JOBAPP='ADD_JOBAPP'
export const REMOVE_JOBAPP='REMOVE_JOBAPP'

//  Action Creators:

export const gotJobApps = (jobApps) => {
  return ({
    type: GOT_JOBAPPS_FROM_SERVER,
    jobApps
  })
}

export const addJobApp = (newApp) => {
  return ({
    type: ADD_JOBAPP,
    newApp
  })
}

export const removedJobApp = (id) => {
  return ({
    type: REMOVE_JOBAPP,
    id
  })
}

//  Thunk Creators

export const getJobApps = () => {
  return async (dispatch, getState) => {
    try {
      let appsList = await Axios.get('/api/jobapps')
      dispatch(gotJobApps(appsList.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addingJobApp = (jobApp) => {
  return async (dispatch, getState) => {
    try {
      let newJobApp=await Axios.post('/api/jobapps', jobApp)
      dispatch(addJobApp(newJobApp.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removingJobApp = (id) => {
  return async (dispatch, getState) => {
    try {
      await Axios.delete(`/api/jobapps/${id}`)
      dispatch(removedJobApp(id))
    } catch (error) {
      console.log(error)
    }
  }
}

//  Reducers:

function jobAppsReducer(jobApps=[], action) {
  switch (action.type) {
    case GOT_JOBAPPS_FROM_SERVER:
      return action.jobApps
    case ADD_JOBAPP:
      return [...jobApps, action.newApp]
    case REMOVE_JOBAPP:
      let appsList = jobApps.filter(singleApp => {
        return singleApp.id !== action.id
      })
      return appsList
    default:
      return jobApps
  }
}

export default jobAppsReducer
