import { fromJS } from 'immutable'

const initial = fromJS({
    current_rooms: [
        "BASIC_ENTRANCE",
        "BASIC_ROOM",
        "BASIC_ROOM",
        "BASIC_REST_AREA",
        "BASIC_BOSS_ROOM",
    ],
    total_space: 200
})

export default function(state=initial, action) {
    switch(action.type) {
        case "@@INIT":
            return state
    }
    return state
}