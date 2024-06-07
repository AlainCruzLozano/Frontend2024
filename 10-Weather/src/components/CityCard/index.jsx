import { useEffect } from "react"
import { useState } from "react"
import CityCardContent from "./CityCardContent"
import CityCardPlaceHolder from "./CityCardPlaceHolder"
import { getWeather } from "../../api/WeatherApi"

const CityCard =({city})=>{
  const [weather,setWeather] = useState (null)

  useEffect(()=>{
    const getCityWeather = async () => {
      setWeather(await getWeather(city))
    }
    
    getCityWeather()
  },[city])

    return (
        <div className="card" style={{width: '18rem'}}>
          {
            weather?
            <CityCardContent weather={weather}/>:
            <CityCardPlaceHolder/>
          }
        </div>
    )
}

export default CityCard