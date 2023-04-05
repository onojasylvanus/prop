import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/profile/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person fullName='Slyvanus' bio=' Im a web developer with in-depth experience as a front end developer  ' profession='Software Engineer'/>
    </div>
  )
}

export default App
