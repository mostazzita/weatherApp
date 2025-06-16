import { useState } from "react"

function App() {

  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="locationInput">
          Ingrese una ubicación
          <input type="text" id="locationInput" value={location}/>
        </label>
        <button type="submit">Buscar</button>
      </form>
    </>
  )
}

export default App
