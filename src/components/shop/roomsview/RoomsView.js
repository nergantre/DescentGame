import React from 'react';
import Description from './RoomsDescription'
import NavigationMenu from '../navigation/NavigationMenu'
import RoomsList from './RoomsList'
const navigationOptions = [
    [
        {
            label: "Back",
            target: "StoreView"
        }
    ]
]

export default ({building}) => (
    <div className="container">
        <div className="row">
            <Description building={building}/>
        </div>
        <div className="row">
            <RoomsList rooms={building.get("current_rooms")}/>
        </div>
        <NavigationMenu navigationOptions={navigationOptions}/>
    </div>
)