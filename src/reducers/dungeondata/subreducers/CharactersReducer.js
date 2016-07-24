import { fromJS } from 'immutable'
import GenerateCharacter from '../../../data/characters/CharacterGenerator'

const initial = fromJS([
    GenerateCharacter("RACE_HUMAN"),
    GenerateCharacter("RACE_SUCCUBUS")
])

export default function(state=initial, action) {
    switch(action.type) {
        case "@@INIT":
            return state
    }
    return state
}