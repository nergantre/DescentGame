import React from 'react';
import {connect} from 'react-redux'
import Description from './RoomsDescription'
import NavigationMenu from '../navigation/NavigationMenu'

const navigationOptions = [
    [
        {
            label: "Back",
            target: "StoreView"
        }
    ]
]

const component = React.createClass({
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