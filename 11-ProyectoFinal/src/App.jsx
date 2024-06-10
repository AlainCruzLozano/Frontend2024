import React, { useState, useEffect } from 'react';
import './assets/index.css';
import axios from 'axios';
import CharacterContainer from './components/CharacterContainer';
import SearchBar from './components/SearchBar'
//import { getCharacterID, getCharacter } from './api/apiRM';

function App() {
  const [characterID, setCharacterID] = useState('');
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  // const[getCharacter, getCharacterID] = useState([])

  useEffect(() => {
    const savedCharacters = localStorage.getItem('characters');
    if (savedCharacters) {
      setCharacters(JSON.parse(savedCharacters));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters));
  }, [characters]);
  

  useEffect(() => {
    const fetchData = async () =>{
      const characterID = await getCharacter()
      setCharacterID(characterID)
    }
    fetchData()
  },[])

const getCharacterID = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterID}`);
        setCharacters(prevCharacters => [...prevCharacters, response.data]);
    } catch (error) {
        setError('Personaje no encontrado por ID');
    }
};

const getCharacter = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterID}`);
        if (response.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.results.length);
          setCharacters(prevCharacters => [...prevCharacters, response.data.results[randomIndex]]);
        }
    } catch (error) {
        setError('Personaje no encontrado');
    }
};

  return (
    <div>
      <SearchBar
        characterID={characterID} 
        setCharacterID={setCharacterID} 
        getCharacterID={getCharacterID} 
        getCharacter={getCharacter} 
        error={error} 
    />

      <CharacterContainer characters={characters} /> 

    </div>
  );
}

export default App;
