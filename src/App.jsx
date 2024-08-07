import { useState } from 'react'
import BoxForm from './components/BoxForm'
import Box from './components/Box'
import './App.css'

function App() {
  const [currentBoxs, setCurrentBoxs] = useState([])
  
  const stateUpdater = (newValue) => {
  setCurrentBoxs([...currentBoxs, newValue])
  }

  return (
    <div className='app'>
    <h1>Box Generator</h1>
      <BoxForm stateUpdater={stateUpdater}/>
      <Box currentBoxs={currentBoxs} setCurrentBoxs={setCurrentBoxs} />
    </div>
  )
}

export default App