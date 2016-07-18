import React from 'react';
import { RoomsData } from '../../../data/rooms'

/**
 * description component.
 *
 * This later will contain code to generate a description of the shop from current conditions.
 */

const numberOfRooms = (building) => building.get("current_rooms").size
const pluralRooms = (building) => numberOfRooms(building) !== 1
const currentRooms = (building) => building.get("current_rooms").map(room_type_name => {
    if (!RoomsData.contains(room_type_name)) {
        console.warn(room_type_name + " is not a valid room!")
    }
    return RoomsData.get(room_type_name)
}).filter( room => room != null)
const totalSpace = (building) => building.get("total_space")
const getSpaceRemaining = (building) =>
    totalSpace(building) - currentRooms(building).map((room) => room.get("room_size")).reduce((a, b) => a + b, 0)

export default ({building}) => (
    <div className="col-md-12">
        <h4>
            <p>There {pluralRooms(building) ? "are" : "is"} currently {numberOfRooms(building)} room{pluralRooms(building) ? "s" : ""} built.</p>
            <p>{getSpaceRemaining(building)} sq meters of open space remains.</p>
        </h4>
    </div>
)