import React from 'react';
import CharacterCard from './CharacterCard.jsx';

const CharacterList = ({ characters }) => (
<div className="character-container">
    {characters && characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
    ))}
</div>
);

export default CharacterList;
