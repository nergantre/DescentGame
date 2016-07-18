import { fromJS } from 'immutable'

const initial = fromJS({
    current_rooms: [
        "BASIC_RECEPTION",
        "BASIC_ROOM"
    ],
    total_space: 400
})

export default function(state=initial, action) {
    switch(action.type) {
        case "@@INIT":
            return state
    }
    return state
}