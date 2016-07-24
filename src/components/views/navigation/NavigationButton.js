import React from 'react';
import NavigationContainer from './NavigationContainer'

let component = ({label, target, handleNavigate}) => (
    <button className="btn btn-default" onClick={handleNavigate({target:target})}>{label}</button>
)

export default NavigationContainer(component)