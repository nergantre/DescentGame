import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import ui from './reducers/ui/UIReducers'
import dungeon_data from './reducers/dungeondata/DungeonDataReducer'

const reducer = combineReducers({ui, dungeon_data})

export default createStore(reducer, fromJS(window.devToolsExtension && window.devToolsExtension()))