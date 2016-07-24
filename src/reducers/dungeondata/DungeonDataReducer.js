import { combineReducers } from 'redux-immutable'
import characters from './subreducers/CharactersReducer'
import rooms from './subreducers/RoomsReducer'

export default combineReducers({characters, rooms})