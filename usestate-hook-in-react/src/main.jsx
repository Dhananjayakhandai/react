import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
<<<<<<< HEAD
  // <StrictMode>
    <App root = {root}/>
  // {/* </StrictMode>, */}
=======
  <StrictMode>
    <App root = {root}/>
  </StrictMode>,
>>>>>>> e76bfcb (useState of hook in react)
)
