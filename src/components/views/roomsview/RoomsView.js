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

export default ({dungeon}) => (
    <div className="container">
        <div className="row">
            <Description dungeon={dungeon}/>
        </div>
        <div className="row">
            <RoomsList rooms={dungeon.get("current_rooms")}/>
        </div>
        <NavigationMenu navigationOptions={navigationOptions}/>
    </div>
)