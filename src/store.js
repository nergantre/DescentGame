import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import ui from './reducers/ui/UIReducers'
import shop_data from './reducers/shopdata/ShopDataReducer'

const reducer = combineReducers({ui, shop_data})

export default createStore(reducer, fromJS(window.devToolsExtension && window.devToolsExtension()))