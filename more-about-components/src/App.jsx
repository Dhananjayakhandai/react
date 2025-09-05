import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product'
import Product from './product'

function App() {
  // console.log(product)

  return (
    <>
      {/* { product()} */}
      <Product abc="xyz" brand="Adidas" price="3999.99" description="very good product" />
      <Product brand="Shree leather" price="6000" />
      <Product brand="puma" price="7999.99" />

      {/* {
        products.map((p)=>{
          return <Product.brand={p.brand} price={p.price} description={p.description}/>
        })
      } */}

      {products.map((p) => <Product brand={p.brand} price={p.price} description={p.description} key={idx  }/>)}

    </>
  )}

  function Product({ brand, price, ...extras }) {
    // const brand = props.brand
    // const price = props.price

    // const { brand, price , ...extras} = props
    console.log(brand, price, extras)
    
    console.log('props', props)
    return (
      <>
        <h1>{brand}Shoes</h1>
        <h2>{price}</h2>

      </>
    )
  }

  export default App
