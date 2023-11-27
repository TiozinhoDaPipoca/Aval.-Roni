// PokemonDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';

function PokemonDetail() {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`/pokemon/${pokemonName}`)
      .then(response => setPokemonDetails(response.data))
      .catch(error => console.error(error));
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;
