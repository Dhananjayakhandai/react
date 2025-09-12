import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList() {
    console.log('.......................', countriesData[0])
    return (
        <div className="countries-container">
            {
                countriesData.map(
                    (country, idx) => {
                        return(
                        <CountryCard 
                        key={idx}
                        flag={country.flags.svg}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital[0]}

                        />
                        )
                    }
                
                )
            }
        </div>
    )
}

