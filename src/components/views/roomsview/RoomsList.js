import React from 'react';
import { RoomsData } from '../../../data/RoomsData'
import RoomItem from './RoomItem'
const currentRooms = (rooms) => rooms.map(room_type_name => {
    if (!RoomsData.contains(room_type_name)) {
        console.warn(room_type_name + " is not a valid room!")
    }
    return RoomsData.get(room_type_name)
}).filter( room => room != null)

export default ({rooms}) =>
    <ul>
        {
            currentRooms(rooms).map(
                (room, index) => <RoomItem key={index} room={room}/>
            )
        }
    </ul>