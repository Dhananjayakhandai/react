export default function Product({ brand, price, ...extras }) {
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
  
  
  