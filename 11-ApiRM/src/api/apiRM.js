export const getWeather = async (city)=>{
    const url=`https://rickandmortyapi.com/api/character/${searchNI}`
    const response= await fetch(url)
    const weather = await response.json()

    console.log(weather.current.condition.text)
    return weather
}