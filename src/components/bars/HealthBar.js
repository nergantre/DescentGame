import React from 'react'
export default ({character}) => {
    const max = character.get("health").get("max")
    const current = character.get("health").get("current")
    const percent = Math.min(100, Math.round(current/max * 100))

    return (
    <div className="progress">
        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={current} aria-valuemin="0" aria-valuemax={max} style={{width: percent+"%"}}>
            <span>Health: {current} / {max}</span>
        </div>
    </div>
    )
}