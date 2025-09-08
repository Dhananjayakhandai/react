import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  console.log('Parent component ')
const [name, setName] = useState('Rahul')

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>React Props vs States</h1>

        <Greeting name ={name}/>
        <button style={{marginTop :'10px'}} onClick={()=>{setName((prev)=>prev + 1)}}>click me</button>
      </div>
    </>
  )
}

export default App
