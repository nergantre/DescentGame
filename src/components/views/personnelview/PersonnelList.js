import React from 'react';
import PersonnelItem from './PersonnelItem'

export default ({staff}) =>
    <ul>
        {
            staff.map(
                (person, index) => <PersonnelItem key={index} staff={person}/>
            )
        }
    </ul>