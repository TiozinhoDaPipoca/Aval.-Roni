// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';

function Home() {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios.get('/type')
      .then(response => setPokemonTypes(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Choose a Pokémon Type</h2>
      <ul>
        {pokemonTypes.map(type => (
          <li key={type.name}>
            <Link to={`/type/${type.name}`}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
