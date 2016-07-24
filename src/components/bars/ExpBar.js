import React from 'react'
import { MAX_LEVEL, mapLevelToExp, mapExpToLevel } from '../../data/characters/LevelExpData'

export default ({character}) => {
    const race = character.get("race")
    const current = character.get("experience").get("current")
    const current_level = mapExpToLevel(race, current)
    const next_level = Math.min(MAX_LEVEL, current_level + 1)
    const max = mapLevelToExp(race, next_level)
    const percent = Math.min(100, Math.round(current/max * 100))
    return (
    <div className="progress">
        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={current} aria-valuemin="0" aria-valuemax={max} style={{width: percent+"%"}}>
            <span>Exp: {current} / {max}</span>
        </div>
    </div>
    )
}