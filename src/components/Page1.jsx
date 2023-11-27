// Page1.js
import React, { useState, useEffect } from 'react';
import axios from '../api';

function Page1() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Exemplo de requisição para obter dados detalhados do primeiro Pokémon
    axios.get('/pokemon/1')
      .then(response => setPokemonData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Pokémon Details - Page 1</h2>
      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Page1;
