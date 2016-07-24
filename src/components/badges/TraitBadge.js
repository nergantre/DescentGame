import React from 'react'
import { getTrait } from '../../data/characters/TraitsData'
import ReactTooltip from 'react-tooltip'

export const TraitBadge = ({trait_id}) =>
    <span>
        <span className="label label-primary" data-tip data-for={trait_id}> {getTrait(trait_id).get('name')} </span>
        <ReactTooltip id={trait_id} type='dark' effect='float'>
            {
                getTrait(trait_id).get('description')
            }
        </ReactTooltip>
    </span>
export const formatTraitsAsBadges = (traits) =>
    traits.map((trait, index) => <TraitBadge key={index} trait_id={trait}/>)

