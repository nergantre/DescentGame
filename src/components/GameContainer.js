import React from 'react'
import {connect} from 'react-redux'
import ShopView from './shop/storeview/ShopView'
import PersonnelView from './shop/personnelview/PersonnelView'
import RoomsView from './shop/roomsview/RoomsView'

const component = ({view, shop_data}) => {
    console.log(view)

    switch (view) {
        case "ShopView":
        {
            return <ShopView/>
        }
        case "PersonnelView":
        {
            return <PersonnelView staff={shop_data.get("staff")}/>
        }
        case "RoomsView":
        {
            return <RoomsView building={shop_data.get("building")}/>
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
            view: state.get('ui').get('current_view'),
            shop_data: state.get('shop_data')
        }
    })(component)
