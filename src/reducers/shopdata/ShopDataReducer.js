import { combineReducers } from 'redux-immutable'
import staff from './subreducers/StaffReducer'
import building from './subreducers/BuildingReducer'

export default combineReducers({staff, building})