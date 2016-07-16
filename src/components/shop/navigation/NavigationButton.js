import React from 'react';
import {connect} from 'react-redux'
import { actionNavigateToView } from '../../../actions/NavigationActions'

let component = ({label, target, handleClick}) => (
    <button className="btn btn-default" onClick={() => handleClick(target)}>{label}</button>
)

export default connect(
    () => ({}),
    function (dispatch) {
        return {
            handleClick: (target) => dispatch(actionNavigateToView(target))
        }
    })(component)