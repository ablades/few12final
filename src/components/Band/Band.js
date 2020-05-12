import React from 'react'
import data from '../../metal.json'
import Like from '../Like/Like.js'
import './Band.css'

function Band(props){
    const { ID } = props
    const { band_name, fans, formed, origin, split, style } = data[ID]

    return (
        <div className="band">
            <h2>{band_name}</h2>
            <h3>{formed}</h3>
            <small><strong>{origin}</strong></small>
            <small>{fans}</small>
            <p>
                {split === '-' ? 
                    <span>Band is still together</span>
                    :
                    <span>Band split in {split}</span>
                }
            </p>
            <Like />

        </div>
    )
}

export default Band