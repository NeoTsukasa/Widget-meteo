import { useState } from 'react'
import './App.css'
import Widget from '../Widget/Widget'

function App() {
  const [cities, setCities] = useState([75000, 59000, 13000, 69001])

  return (
    <div className="App">
      <Widget cities={cities} />
    </div>
  )
}

export default App
