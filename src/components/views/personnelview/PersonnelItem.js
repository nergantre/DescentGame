import React from 'react'
import NavigationContainer from '../navigation/NavigationContainer'
import RaceBadge from '../../badges/RaceBadge'
import { formatTraitsAsBadges } from '../../badges/TraitBadge'

export default NavigationContainer(({staff, handleNavigate}) => (
    <li className="media">
            <div className="media-body">
                <div className="media-heading">
                    <a href="#" onClick={handleNavigate({target:"CharacterDetailView", params:{character:staff}})}><h4><u>{staff.get("name")}</u></h4></a>
                </div>
                <h5>
                    <b>Race</b>: <RaceBadge race_id={staff.get('race')}/>
                </h5>
                <h6>
                    <b>Traits</b>: <span>{formatTraitsAsBadges(staff.get("traits"))}</span>
                </h6>
            </div>

    </li>
))