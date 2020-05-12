import React from 'react'
import Band from '../Band/Band.js'
import data from '../../metal.json'
import './Bands.css'

function Bands() {
    const bands = data.map(({ID}) =>{
        return (
        <Band ID={ID} />)
    })


    return(
        <div>
            <h1># of Bands: {bands.length}</h1>
            <div className="Bands">
            {bands}
            </div>
        </div>
    )
}

export default Bands