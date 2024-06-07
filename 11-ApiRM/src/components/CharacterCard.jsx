import React from 'react';

const CharacterCard = ({ character }) => {
    if (!character) {
        return <div>No hay datos del personaje</div>;
    }

    return (
    <div className="card">
        <h2>{character.id} - {character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><i className="bi bi-universal-access"></i> {character.species}</p>
        <p><i className="bi bi-heart-pulse-fill"></i> {character.status}</p>
        <p><i className="bi bi-gender-ambiguous"></i> {character.gender}</p>
        <p><i className="bi bi-microsoft-teams"></i> {character.type || 'No especificado'}</p>
        <p><i className="bi bi-geo-alt-fill"></i> {character.location.name}</p>
    </div>
    );
};


export default CharacterCard;
