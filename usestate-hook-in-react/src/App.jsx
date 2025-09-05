import { useState } from 'react';
import './App.css'
let count = 0;
// const data = useState //( useState takes initial value as a parameter)
function App({ root }) {
<<<<<<< HEAD
  console.log("rendering")
  // const data = useState(100) //([state, useState] useState takes initial value as a parameter)
  // console.log('data:-', data[0])

  const [counter, setCounter] = useState(100)
=======
  // const data = useState(100) //( useState takes initial value as a parameter)
  // console.log('data:-', data[0])

const  [counter, setCounter] = useState(100)
>>>>>>> e76bfcb (useState of hook in react)

  const increaseValue = (e) => {
    // const  data = useState("sai")
    console.log("increase button click")
<<<<<<< HEAD

=======
    
>>>>>>> e76bfcb (useState of hook in react)
    // count++
    // console.log(count)
    // root.render(<App root={root} />)

    // data[0]++
    // console.log(data[0])

    // const setData  = data[1]
    // setData(data[0]++)
    // console.log(setData[0])

    setCounter(counter + 1)
    console.log(counter)
  }

  const decreaseValue = (e) => {
    console.log("decrease button click")
    setCounter(counter - 1)
    console.log(counter)
<<<<<<< HEAD

    //   setCounter(4)
    //   setCounter(counter + 1)
    //   // alert("counter is" + counter)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)

    // setCounter((prevState)=>{
    //   console.log("1st prevState is :", prevState)
    //   return prevState + 1;
    // })

    // setCounter((prevState)=>{
    //   console.log(" 2nd prevState is :", prevState)
    //   return prevState + 1;
    // })

    // setCounter((prevState)=>{
    //   console.log(" 3rd prevState is :", prevState)
    //   return prevState + 1;
    // })

    setCounter(prevState => prevState + 1)
    setCounter(prevState => prevState + 1)
    setCounter(prevState => prevState + 1)
    
  }

  // const increaseValue3 = () => {
  //   console.log("increase button click");          
  //   setCounter(prev => prev + 3);

  //   setCounter(prev => prev + 3);

  // };
=======
  }

  
>>>>>>> e76bfcb (useState of hook in react)
  return (
    <>
      <h1>Counter App</h1>

      <button onClick={increaseValue}>Increase</button>
      <br /><br />
      <button >{counter}</button>
      <br /><br />
      <button onClick={decreaseValue}>Decreases</button>
<<<<<<< HEAD
      <br /><br />
      {/* <button onClick={increaseValue3}>Increase by 3</button> */}
=======


>>>>>>> e76bfcb (useState of hook in react)
    </>
  )
}

export default App
