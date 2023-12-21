import { useState } from 'react'
import './App.css'
import Widget from '../Widget/Widget'
import Form from '../Form/Form'

function App() {
  const [cities, setCities] = useState([75000, 59000, 13000, 69001])

  return (
    <div className="App">
      <Form setCities={setCities} cities={cities} />
      <Widget cities={cities} />
    </div>
  )
}

export default App
