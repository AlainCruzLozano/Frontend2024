export const getWeather = async (city)=>{
    const key='ca6d45f2d62042a49b650429240605'
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no&lang=es`
    const response= await fetch(url)
    const weather = await response.json()

    console.log(weather.current.condition.text)
    return weather
}