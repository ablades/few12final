import React from 'react'
import Band from '../Band/Band.js'
import data from '../../metal.json'

function Bands() {
    const bands = data.map(({ID}) =>{
        return (
        <Band ID={ID} />)
    })


    return(
        <div className="Bands">
            <h1># of Bands: {bands.length}</h1>
            {bands}
        </div>
    )
}

export default Bands