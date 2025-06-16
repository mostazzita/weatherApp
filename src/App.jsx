import { useState } from "react"

function App() {

  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(location)
  }

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label htmlFor="locationInput">
          Ingrese una ubicación
          <input onChange={handleInputChange} value={location} type="text" id="locationInput" />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </>
  )
}

export default App
