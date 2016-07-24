import React from 'react';

export default ({room}) => (
    <li className="media">
        <div className="media-body">
            <div className="media-heading">
                <h4>{room.get("room_name")}</h4>
            </div>
            <h5>{room.get("room_description")}</h5>
            <ul>
                <li>
                    <h6>Size: {room.get("room_size")} m<sup>2</sup></h6>
                </li>
            </ul>
        </div>
    </li>
)