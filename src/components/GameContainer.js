import React from 'react'
import {connect} from 'react-redux'
import ShopView from './shop/storeview/ShopView'
import PersonnelView from './shop/personnelview/PersonnelView'
import RoomsView from './shop/roomsview/RoomsView'

const component = ({view}) => {
    console.log(view)

    switch (view) {
        case "ShopView":
        {
            return <ShopView/>
        }
        case "PersonnelView":
        {
            return <PersonnelView/>
        }
        case "RoomsView":
        {
            return <RoomsView/>
        }
        default:
        {
            return <ShopView/>
        }
    }
}

export default connect(
    function (state) {
        return {
            view: state.get('ui').get('current_view')
        }
    })(component)
