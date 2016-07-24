import React from 'react';
import Description from './PersonnelDescription'
import NavigationMenu from '../navigation/NavigationMenu'
import PersonnelList from './PersonnelList'

const navigationOptions = [
    [
        {
            label: "Back",
            target: "StoreView"
        }
    ]
]

export default ({staff}) => (
    <div className="container">
        <div className="row">
            <Description personnel={staff}/>
        </div>
        <div className="row">
            <ul>
                <PersonnelList staff={staff}/>
            </ul>
        </div>
        <NavigationMenu navigationOptions={navigationOptions}/>
    </div>
)