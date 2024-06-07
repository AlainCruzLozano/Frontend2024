import axios from 'axios';

export const CharacterById = async (id) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
};

export const CharacterByName = async (name) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return response.data.results;
};