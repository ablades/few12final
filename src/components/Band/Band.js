import React from 'react'
import data from './metal.json'

function Band(props){
    const { ID } = props.match.params
    const { band_name, fans, formed, origin, split, style } = data[ID]

    return (
        <div className="band">
            <h2>{band_name}</h2>
            <h3>{formed}</h3>
            <small><strong>{origin}</strong></small>
            <small>{fans}</small>
        </div>
    )
}

export default Band