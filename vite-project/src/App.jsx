import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoComp from './todoComp'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>   
    <TodoComp></TodoComp>
    </div>
      
    </>
  )
}

export default App
