import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData.js'
import CountryCard from './CountryCard.jsx'

export default function CountriesList({ query }) {
  console.log('Rendering')
  // console.log('.....................', countriesData)
  // console.log('.....................', countriesData[0])

  // const filteredCountries = countriesData.filter(country => 
    // country.name.common.toLowerCase().includes('i'));

  // const [query, setQuery] = useState('')
  // let countriesData = []
  const [countriesData, setCountriesData] = useState([])

  // if (countriesData.length === 0) {
  //   // console.log('Fetching countries data...')
  // fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
  //   .then((res) => {
  //     return res.json()
  //     // console.log('',res.json())
  //   })
  //   .then((data) => {
  //     // console.log('data:', data)
  //     // countriesData = data
  //     setCountriesData(data)
  //   })
  // }

  useEffect(() => {
    // console.log("1")
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
    .then((res) => {
      return res.json()
      // console.log('',res.json())
    })
    .then((data) => {
      // console.log('data:', data)
      // countriesData = data
      setCountriesData(data)
    })
  }, [])

  /**   [] -> defines useEffect will only be executed on first render (mount)
        [states] -> defines useEffect again executed if the dependency state has been changed
        if dependency array is not available then useEffect will be executed on every re-render
        for some clean-up purposes, you can return a function from useEffect
  */


  // console.log('countriesData:', countriesData)

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log("2")
  // }, [count])

  // useEffect(() => {
  //   console.log("3")
  // })

  useEffect(() => {
    console.log("4")
    const id = setInterval(() => {
      console.log("Interval executing in 2 seconds")
    }, 2000)
    return () => {
      console.log("Cleaning up...")
      clearInterval(id)
    }
  },[])

  const filteredCountries = countriesData.filter((country) => 
    country.name.common.toLowerCase().includes(query))
  return (
    <>
    {/* <input type="text" onChange={(e) => setQuery(e.target.value)} /> */}



    <button onClick={() => {setCount(count + 1)}}>increment</button>
    <button onClick={() => {setCountriesData([])}}>Remove all countries</button>
    <div className="countries-container">
      { 
        filteredCountries.map(
        // countriesData.map(
          (country, idx) => 
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
    </div>
    </>
  )
}