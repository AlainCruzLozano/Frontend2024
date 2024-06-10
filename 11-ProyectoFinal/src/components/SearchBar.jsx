import React from "react"

const SearchBar = ({ characterID, setCharacterID, getCharacterID, getCharacter, error }) => {
    return(
    <div>
        <h1><i class="fa fa-space-shuttle fa-spin"></i> Buscar Personaje de Rick and Morty <i class="fa fa-child fa-spin"></i></h1>
        <hr />
        
        <div className='input-group'>
            <span className='input-group-text'>Buscar</span>
            <input
                className='form-control'
                type="text"
                laceholder="ID o Nombre del personaje"
                value={characterID}
                onChange={(e) => setCharacterID(e.target.value)}
            />
            <button 
                className="btn btn-outline-light"
                onClick={getCharacterID}>Buscar Por ID</button>
            <button 
                className="btn btn-outline-light"
                onClick={getCharacter}>Buscar por Nombre</button>
        </div>
            <h2>{error && <p>{error}</p>}</h2>
        
        <hr />
    </div>
    );
}
export default SearchBar;