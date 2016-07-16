import React from 'react';
import StoreNavigationButton from './NavigationButton'

const component = React.createClass(
    {
        render() {
            return (
                <div>{
                    this.props.navigationOptions.map((rowElements, row) =>
                        <div className="row" key={"row-"+row}>
                            <div className="col-md-*" key={"row-"+row}>
                                { rowElements.map((option, col) => <StoreNavigationButton key={col}
                                                                                          target={option.target}
                                                                                          label={option.label}/>) }
                            </div>
                        </div>
                    )
                }</div>
            )
        }
    }
)

export default component