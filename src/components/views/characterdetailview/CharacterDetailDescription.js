import React from 'react';
import RaceBadge from '../../badges/RaceBadge'
import { getLevel } from '../../../data/characters/LevelExpData'
/**
 * description component.
 *
 * This later will contain code to generate a description of the shop from current conditions.
 */
export default ({character}) => (
    <div className="col-md-12">
        <h4><b>Level {getLevel(character)} </b> <RaceBadge race_id={character.get("race")}/></h4>
    </div>
)