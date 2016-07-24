import { NAVIGATE_TO_VIEW_ACTION_TYPE } from '../../actions/NavigationActions'
import { fromJS } from 'immutable'

const initial = fromJS({
    current_view: "HomeView"
})

export default function(state=initial, action) {
    switch(action.type) {
        case NAVIGATE_TO_VIEW_ACTION_TYPE: {
            console.log("Navigating to " + action.target)
            return state.merge({current_view: action.target, params: action.params})
        }
        case "@@INIT":
            return state
    }
    return state
}