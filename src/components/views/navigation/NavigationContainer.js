import { connect } from 'react-redux'
import { actionNavigateToView } from '../../../actions/NavigationActions'

export default connect(
    () => ({}),
    function (dispatch) {
        return {
            handleNavigate: (payload) => (event) => dispatch(actionNavigateToView(payload))
        }
    })