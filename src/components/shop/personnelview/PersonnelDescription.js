import React from 'react';

/**
 * description component.
 *
 * This later will contain code to generate a description of the shop from current conditions.
 */
export default ({personnel}) => (
    <div className="col-md-12">
        <h4>Currently there are {personnel.size} workers in the shop.</h4>
    </div>
)