import React, { useState } from 'react';
import axios from 'axios';
import './assets/index.css';

function App() {
  const [searchNI, setSearchNI] = useState('');
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  const fetchCharacterById = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${searchNI}`);
      setCharacters([response.data]);
      setError('');
    } catch (error) {
      setError('Personaje no encontrado');
    }
  };

  const fetchCharacterByName = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchNI}`);
      setCharacters(response.data.results);
      setError('');
    } catch (error) {
      setError('Personaje no encontrado');
    }
  };

  return (
    <div>
      <h1>Buscar Personaje de Rick and Morty</h1>
      <hr />

      <div className='input-group'>
        <span className='input-group-text'>Búsqueda</span>
        <input
          className='form-control'
          type="text"
          placeholder="ID o nombre del personaje"
          value={searchNI}
          onChange={(e) => setSearchNI(e.target.value)}
        />
        <button 
          className="btn btn-outline-light"
          onClick={fetchCharacterById}>Buscar por ID</button>
        <button 
          className="btn btn-outline-light"
          onClick={fetchCharacterByName}>Buscar por Nombre</button>
        {error && <p>{error}</p>}
      </div>

      <hr />
      <div className="character-container">
        {characters.map((character, index) => (
          <div className="card" key={index}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p><i className="bi bi-universal-access"></i> {character.species}</p>
            <p><i className="bi bi-heart-pulse-fill"></i> {character.status}</p>
            <p><i className="bi bi-gender-ambiguous"></i> {character.gender}</p>
            <p><i className="bi bi-microsoft-teams"></i> {character.type || 'No especificado'}</p>
            <p><i className="bi bi-geo-alt-fill"></i> {character.location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

