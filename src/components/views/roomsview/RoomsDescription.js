import React from 'react';
import { RoomsData } from '../../../data/RoomsData'

/**
 * description component.
 *
 * This later will contain code to generate a description of the shop from current conditions.
 */

const numberOfRooms = (dungeon) => dungeon.get("current_rooms").size
const pluralRooms = (dungeon) => numberOfRooms(dungeon) !== 1
const currentRooms = (dungeon) => dungeon.get("current_rooms").map(room_type_name => {
    if (!RoomsData.has(room_type_name)) {
        console.warn(room_type_name + " is not a valid room!")
    }
    return RoomsData.get(room_type_name)
}).filter( room => room != null)
const totalSpace = (dungeon) => dungeon.get("total_space")
const getSpaceRemaining = (dungeon) =>
    totalSpace(dungeon) - currentRooms(dungeon).map((room) => room.get("room_size")).reduce((a, b) => a + b, 0)

export default ({dungeon}) => (
    <div className="col-md-12">
        <h4>
            <p>There {pluralRooms(dungeon) ? "are" : "is"} currently {numberOfRooms(dungeon)} room{pluralRooms(dungeon) ? "s" : ""} built.</p>
            <p>{getSpaceRemaining(dungeon)} sq meters of open space remains on this floor.</p>
        </h4>
    </div>
)