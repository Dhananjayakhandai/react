import React from 'react';
import './App.css'

function App() {
  const a = 10;
  const b = 20;
  console.log(a + b)

  return (
//  <div>
//    <h1>{a + b}</h1>
//    <h2>Mentor:<b>Sai Pranab Patra</b></h2>
//  </div>
// {/* <React.Fragment>
// <h1>{a + b}</h1>
// <h2>Mentor:<b>Sai Pranab Patra</b></h2>
// </React.Fragment> */}
<>
<h1>{a + b}</h1>
   <h2>Mentor:<b>Sai Pranab Patra</b></h2>
</>
  )

}

const val = App()
console.log("val is:", val)
export default App


// function app() {
//   return <h1>Jt</h1>
// }

// export { app };