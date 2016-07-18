import React from 'react';
import Description from './PersonnelDescription'
import NavigationMenu from '../navigation/NavigationMenu'

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
        <NavigationMenu navigationOptions={navigationOptions}/>
    </div>
)