import Axios from 'axios'

// Action Types:

export const GOT_SINGLE_JOBAPP_FROM_SERVER='GOT_SINGLE_JOBAPP_FROM_SERVER'
export const SINGLE_JOBAPP_UNMOUNT='SINGLE_JOBAPP_UNMOUNT'
export const UPDATE_JOBAPP='UPDATE_JOBAPP'

//  Action Creators:

export const gotSingleJobApp = (singleApp) => {
  return ({
    type: GOT_SINGLE_JOBAPP_FROM_SERVER,
    singleApp
  })
}

export const unmountingSingleJobApp = () => {
  return ({
    type: SINGLE_JOBAPP_UNMOUNT
  })
}

export const updateJobApp = (singleApp) => {
  return ({
    type: UPDATE_JOBAPP,
    singleApp
  })
}

//  Thunk Creators

export const getSingleJobApp = (id) => {
  return async (dispatch, getState) => {
    try {
      let singleApp = await Axios.get(`/api/jobapps/${id}`)
      dispatch(gotSingleJobApp(singleApp.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatingJobApp = (id, state) => {
  return async (dispatch, getState) => {
    try {
      let updatedJobApp = await Axios.put(`/api/jobapps/${id}`, state)
      dispatch(updateJobApp(updatedJobApp.data))
    } catch (error) {
      console.log(error)
    }
  }
}

//  Reducers:

function singleJobAppReducer(singleApp={}, action) {
  switch (action.type) {
    case GOT_SINGLE_JOBAPP_FROM_SERVER:
      return {...action.singleApp}
    case SINGLE_JOBAPP_UNMOUNT:
      return {}
    case UPDATE_JOBAPP:
      return {...action.singleApp}
    default:
      return singleApp
  }
}

export default singleJobAppReducer
