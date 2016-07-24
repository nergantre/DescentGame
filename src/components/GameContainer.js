import React from 'react'
import {connect} from 'react-redux'
import HomeView from './views/mainview/HomeView'
import PersonnelView from './views/personnelview/PersonnelView'
import CharacterDetailView from './views/characterdetailview/CharacterDetailView'
import RoomsView from './views/roomsview/RoomsView'

const component = ({view, view_params, dungeon_data}) => {
    console.log(view)

    switch (view) {
        case "HomeView":
        {
            return <HomeView/>
        }
        case "PersonnelView":
        {
            return <PersonnelView staff={dungeon_data.get("characters")}/>
        }
        case "RoomsView":
        {
            return <RoomsView dungeon={dungeon_data.get("rooms")}/>
        }
        case "CharacterDetailView":
        {
            return <CharacterDetailView character={view_params.get("character")}/>
        }
        default:
        {
            return <HomeView/>
        }
    }
}

export default connect(
    function (state) {
        return {
            view: state.get('ui').get('current_view'),
            view_params: state.get('ui').get('params'),
            dungeon_data: state.get('dungeon_data')
        }
    })(component)
