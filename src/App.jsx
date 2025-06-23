import { useState } from "react"

function App() {

  const [location, setLocation] = useState('')
  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=Y25YYAL25FWSHQ2Y73MYKPR2E&contentType=json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data)
    setWeatherInfo(data)
  } catch (error) {
    console.error(error);
  }

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

      <p>{weatherInfo ? weatherInfo.address : null}</p>
      <p>{weatherInfo ? `${weatherInfo.currentConditions.temp} ºC` : null}</p>
      <p>{weatherInfo ? `Windspeed: ${weatherInfo.currentConditions.windspeed}` : null}</p>
      <p>{weatherInfo ? weatherInfo.currentConditions.conditions : null}</p>
       
    </>
  )
}

export default App
