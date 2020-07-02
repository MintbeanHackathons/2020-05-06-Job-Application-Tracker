import {combineReducers} from 'redux'
import jobAppReducer from './jobAppReducer'
import singleJobAppReducer from './singleAppReducer'

const rootReducer = combineReducers({
  jobApps: jobAppReducer,
  singleApp: singleJobAppReducer
})

export default rootReducer
