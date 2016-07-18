import React from 'react';
import {connect} from 'react-redux'
import Description from './ShopDescription'
import NavigationMenu from './../navigation/NavigationMenu'

const navigationOptions = [
    [
        {
            label: "Staff",
            target: "PersonnelView"
        },
        {
            label: "Manage Rooms",
            target: "RoomsView"
        }
    ],
    [
        {
            label: "Visit City",
            target: "VisitView"
        },
        {
            label: "Report",
            target: "ReportView"
        }
    ]
]

var component = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Description/>
                </div>
                <NavigationMenu navigationOptions={navigationOptions}/>
            </div>
        );
    }
})

export default connect(
    function (state) {
        return {
            text: state.get('text')
        }
    })(component)