import React from 'react';

let component = ({label, target, handleClick}) => (
    <button className="btn btn-default" onClick={() => handleClick(target)}>{label}</button>
)

export default component