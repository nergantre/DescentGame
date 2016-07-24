import { fromJS } from 'immutable'

export const RoomsData = fromJS({
    BASIC_RECEPTION: {
        "room_name" : "Reception",
        "type" : "reception",
        "room_description" : "An area where guests enter the rooms and wait for space to become available.",
        "room_size" : 50,
        "base_atmosphere" : 5,
        "requirements" : []
    },
    BASIC_STAGE: {
        "room_name" : "Basic Stage",
        "type" : "reception",
        "room_description" : "A basic stage where dancers can perform. There must be a bar or tavern to attach this to.",
        "room_size" : 50,
        "base_atmosphere" : 5,
        "requirements" : [
            {
                "type" : "building",
                "target" : "bar"
            },
            {
                "type" : "prestige",
                "target" : 20
            }
        ]
    },
    BASIC_BAR: {
        "room_name" : "Basic Bar",
        "type" : "reception",
        "room_description" : "A small bar with a wooden counter and some cheap stools. There's not much to say about this.",
        "room_size" : 50,
        "base_atmosphere" : 2,
        "requirements" : [
            {
                "type" : "building",
                "target" : "reception"
            }
        ]
    },
    BASIC_ROOM: {
        "room_name" : "Basic Room",
        "type" : "room",
        "room_description" : "A rather drab room for the girls to conduct their \"business\". There's not much to say about atmosphere here.",
        "room_size" : 25,
        "base_atmosphere" : 1,
        "requirements" : [
            {
                "type" : "building",
                "target" : "reception"
            }
        ]
    },
})