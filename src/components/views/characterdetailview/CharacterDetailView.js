import React from 'react';
import Description from './CharacterDetailDescription'
import NavigationMenu from '../navigation/NavigationMenu'
import { formatTraitsAsBadges } from '../../badges/TraitBadge'
import HealthBar from '../../bars/HealthBar'
import ExpBar from '../../bars/ExpBar'

const navigationOptions = [
    [
        {
            label: "Back",
            target: "PersonnelView"
        }
    ]
]

export default ({character}) => (
    <div className="container">
        <div className="row">
            <h2>{character.get("name")}</h2>
        </div>
        <div className="row">
            <Description character={character}/>
        </div>
        <HealthBar character={character}/>
        <ExpBar character={character}/>
        <h6>
            <b>Traits</b>: <span>{formatTraitsAsBadges(character.get("traits"))}</span>
        </h6>
        <NavigationMenu navigationOptions={navigationOptions}/>
    </div>
)