// Page2.js
import React, { useState, useEffect } from 'react';
import axios from '../api';

function Page2() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Exemplo de requisição para obter uma lista de Pokémon
    axios.get('/pokemon?limit=5')
      .then(response => setPokemonList(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Pokémon List - Page 2</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page2;
