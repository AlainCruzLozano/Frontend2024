import React, { useState,useEffect } from 'react';
import './assets/index.css';
import { CharacterById, CharacterByName } from './api/apiRM.js';
import SearchBar from './components/SearchBar.jsx';
import CharacterList from './components/CharacterList.jsx';

function App() {
  const [searchNI, setSearchNI] = useState('');
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  const handleCharacterById = async () => {
    try {
      const character = await CharacterById(searchNI);
      setCharacters([character]);
      setError('');
    } catch (error) {
      setCharacters([]);
      setError('ID no disponible');
    }
  };

  const handleCharacterByName = async () => {
    try {
      const characters = await CharacterByName(searchNI);
      setCharacters(characters);
      setError('');
    } catch (error) {
      setCharacters([]); 
      setError('Personaje no encontrado');
    }
  };

  return (
    <div>
      <h1>Buscar Personaje de Rick and Morty</h1>
      <hr />
      <SearchBar 
        searchNI={searchNI}
        setSearchNI={setSearchNI}
        CharacterById={handleCharacterById}
        CharacterByName={handleCharacterByName}
      />
      <h2>{error}</h2>
      <hr />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;