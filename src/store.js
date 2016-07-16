import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import ui from './reducers/ui/UIReducers'

const reducer = combineReducers({ui})

export default createStore(reducer, fromJS(window.devToolsExtension && window.devToolsExtension()))