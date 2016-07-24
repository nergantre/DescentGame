import GenerateName from './NamesData'
import { fromJS } from 'immutable'
import { getRace } from './RacesData'
import { mapLevelToExp } from './LevelExpData'

export default (race, level_range={min:2, max:10}) => {
    const max_health = Math.round(150 + Math.random() * 50)
    const level = level_range.min + Math.round(Math.random()* (level_range.max - level_range.min))
    console.log(level)
    const min_exp_for_level_range = mapLevelToExp(race, level)
    const max_exp_for_level_range = mapLevelToExp(race, level+ 1)
    const current_exp = Math.floor(min_exp_for_level_range + Math.random() * (max_exp_for_level_range - min_exp_for_level_range - 1))

    return fromJS({
        name: GenerateName(),
        race: race,
        traits: getRace(race).get("racial_traits"),
        health: {
            max: max_health,
            current: max_health
        },
        experience: {
            current: current_exp
        }
    })
}