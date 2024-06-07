import React from 'react';

const SearchBar = ({ searchNI, setSearchNI, CharacterById, CharacterByName, error }) => (
<div className='input-group'>
    <span className='input-group-text'>Busqueda</span>
    <input
        className='form-control'
        type="text"
        placeholder="ID o nombre del personaje"
        value={searchNI}
        onChange={(e) => setSearchNI(e.target.value)}
    />
    <button 
        className="btn btn-outline-light"
        onClick={CharacterById}>Buscar por ID</button>
    <button 
        className="btn btn-outline-light"
        onClick={CharacterByName}>Buscar por Nombre</button>
    {error && <p>{error}</p>}
</div>
);

export default SearchBar;
