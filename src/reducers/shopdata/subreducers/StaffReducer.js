import { fromJS } from 'immutable'

const initial = fromJS([
])

export default function(state=initial, action) {
    switch(action.type) {
        case "@@INIT":
            return state
    }
    return state
}