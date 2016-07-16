import React from 'react';
import {connect} from 'react-redux'
import StoreDescription from './StoreDescription'
import StoreNavigationMenu from './StoreNavigationMenu'

var component = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <StoreDescription description={this.props.text}/>
                </div>
                <StoreNavigationMenu navigationOptions={this.props.navigationOptions}/>
            </div>
        );
    }
})

export default connect(
    function (state) {
        return {
            text: state.get('text')
        }
    },
    function (dispatch) {
        return {}
    })(component)