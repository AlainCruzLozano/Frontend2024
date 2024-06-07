import CityCard from "./components/CityCard"
import './assets/css/index.css'
import SearchCity from "./components/SearchCity"
import { useState } from "react"

const App = () => {
  const [cities, setCities]=useState(["Tuxtepec"])
  
  return(
    <div className="container">
    <h1 style={{textAlign:"center"}}>Weather App</h1>
    <hr />
    <h2>SearchCity</h2> 
      <SearchCity cities={cities} setCities={setCities}/>
      <hr />
      {
        cities.map((city, index) => (
          <CityCard key={index} city={city}/>
        ))
      }
    </div>
  )
}

export default App
  