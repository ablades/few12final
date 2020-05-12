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
            {bands}
        </div>
    )
}

export default Bands