<<<<<<< HEAD
import axios from 'axios';

export const CharacterById = async (id) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
};

export const CharacterByName = async (name) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return response.data.results;
};
=======
export const getWeather = async (city)=>{
    const url=`https://rickandmortyapi.com/api/character/${searchNI}`
    const response= await fetch(url)
    const weather = await response.json()

    console.log(weather.current.condition.text)
    return weather
}
>>>>>>> 3f0ef60 (Mas)
