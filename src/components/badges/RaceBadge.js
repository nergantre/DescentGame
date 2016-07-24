import React from 'react'
import { getRace } from '../../data/characters/RacesData'
import ReactTooltip from 'react-tooltip'

export default ({race_id}) =>
    <span>
        <span className="label label-info" data-tip data-for={race_id}> {getRace(race_id).get('name')} </span>
        <ReactTooltip id={race_id} type='dark' effect='float'>
            <span>{getRace(race_id).get('description')}</span>
        </ReactTooltip>
    </span>