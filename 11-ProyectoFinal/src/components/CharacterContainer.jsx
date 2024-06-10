import React from "react"
const CharacterContainer = ({characters}) => {
    return(
<div className="character-container">
        {characters.map((character, index) => (    
        <div className="card" key={index}>
            <h2>{character.id} - {character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p><i class="fa fa-male fa-spin"></i> {character.species}</p>
            <p><i class="fa fa-heartbeat"></i> {character.status}</p>
            <p><i class="fa fa-intersex fa-spin"></i> {character.gender}</p>
            <p><i class="fa fa-user"></i><i class="fa fa-question-circle fa-spin"></i>{character.type || "Unknown"}</p>
            <p><i class="fa fa-globe fa-spin"></i> {character.location.name}</p>
        </div>
        ))}
    </div>
    )
}

export default CharacterContainer;

/* 
https://www.w3schools.com/icons/fontawesome_icons_webapp.asp
https://ui.glass/generator/# 
*/