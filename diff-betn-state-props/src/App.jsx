import { use, useState } from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  // console.log('Parent component ')
  const [name, setName] = useState('Rahul')
  const [showGreeting, setShowgreeting] = useState(true)
  console.log('showGreeting', showGreeting)

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>React Props vs States</h1>

        <button onClick={setShowgreeting(!showGreeting)}>
         {showGreeting ? 'Hide': 'show'}
        </button>

        {/* <Greeting name ={name}/> */}
        {
          showGreeting &&
          <Greeting name={name}>
            <p>this is an extra element passed as <strong>children</strong></p>
            we can pass more elements, text, components etc.
          </Greeting> 
        }


        <button style={{ marginTop: '10px' }} onClick={() => { setName((prev) => prev + 1) }}>click me</button>
      </div>
    </>
  )
}

export default App
