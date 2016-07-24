import { fromJS } from 'immutable'

export const RoomsData = fromJS({
    BASIC_ENTRANCE: {
        "room_name" : "Basic Entrance",
        "type" : "entrance",
        "room_description" : "The entrance of your dungeon. The more of these you have, the more adventurers can enter at a time.",
        "room_size" : 25,
        "base_atmosphere" : 5,
        "requirements" : []
    },
    BASIC_BOSS_ROOM: {
        "room_name" : "Basic Boss Room",
        "type" : "boss_room",
        "room_description" : "A larger than normal room, able to accommodate a boss monster.",
        "room_size" : 50,
        "base_atmosphere" : 5,
        "requirements" : [
            {
                "type" : "building",
                "target" : "room"
            },
            {
                "type" : "level",
                "target" : 5
            }
        ]
    },
    BASIC_REST_AREA: {
        "room_name" : "Basic Rest Area",
        "type" : "rest_area",
        "room_description" : "A small safe area for adventurers to rest. Increases adventurer stamina when they pass through.",
        "room_size" : 25,
        "base_atmosphere" : 2,
        "requirements" : [
            {
                "type" : "building",
                "target" : "room"
            }
        ]
    },
    BASIC_ROOM: {
        "room_name" : "Basic Room",
        "type" : "room",
        "room_description" : "A very basic cave room. Monsters can be spawned here.",
        "room_size" : 25,
        "base_atmosphere" : 1,
        "requirements" : [
            {
                "type" : "building",
                "target" : "entrance"
            }
        ]
    },
})