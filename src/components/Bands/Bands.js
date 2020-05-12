import React from 'react'
import Band from '../Band/Band.js'
import data from '../../metal.json'
import './Bands.css'

function Bands() {
    let countries = []
    const bands = data.map(({ID, origin, fans}) => {
        countries[origin] = countries[origin] || (countries[origin] = [])
        countries[origin][0] = (countries[origin][0] || 0) + 1
        countries[origin][1] = (countries[origin][1] || 0) + fans
        
        return (
        <Band ID={ID} />)
    })


    const countriesList = []

    Object.entries(countries).map(([key,value]) => {
    countriesList.push(<li>{key}: {value[0]} {value[1]}</li>)
    })

    return(
        <div>
            <h3>Countries of origin</h3>
            <ul>
            {countriesList}
            </ul>

            <h1># of Bands: {bands.length}</h1>

            <div className="Bands">
            {bands}
            </div>
        </div>
    )
}

export default Bands