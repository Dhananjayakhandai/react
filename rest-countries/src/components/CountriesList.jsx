import React, { useState } from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({query}) {
    // const [query, setQuery] = useState('')
    const filteredCountries = countriesData.filter((country) =>
                         country.name.common.toLocaleLowerCase().includes(query))
    return (
        <>
            <div className="countries-container">
                {
                    filteredCountries.map(
                        (country, idx) => {
                            return (
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
        </>
    )
}

