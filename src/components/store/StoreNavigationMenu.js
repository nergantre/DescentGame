import React from 'react';
import StoreNavigationButton from './StoreNavigationButton'
import {connect} from 'react-redux'

const NUMBER_OF_COLS = 3;

const makeRow = (navigationOptions, row_n, handleClick) => {
    const cols = []
    for (let col = 0; col < NUMBER_OF_COLS; col += 1) {
        const index = row_n * NUMBER_OF_COLS + col
        if (index >= navigationOptions.size) {
            break;
        }
        cols.push(navigationOptions.get(index))
    }
    const elements = cols.map((option, i) => {
        return <StoreNavigationButton key={i} label={option.get("label")} target={option.get("target")} handleClick={handleClick}/>
    })
    return elements;
}

const component = React.createClass(
    {
        render: function() {
            const rows = []
            for (let row_n = 0; row_n < (this.props.navigationOptions.size / NUMBER_OF_COLS); row_n += 1) {
                rows.push(
                    <div key={'row-' + row_n} className="row">
                        <div key={'row-col-' + row_n} className="col-md-12">
                        {
                            makeRow(this.props.navigationOptions, row_n, this.props.handleClick)
                        }
                        </div>
                    </div>
                )
            }
            return <div>
                {rows}
            </div>
        }
    }
)

export default connect(
    function (state) {
        return {
            text: state.get('text'),
            navigationOptions: state.get('store').get('navigationOptions')
        }
    },
    function (dispatch) {
        return {
            handleClick: (target) => dispatch({
                type: "test",
                payload: target
            })
        }
    })(component)