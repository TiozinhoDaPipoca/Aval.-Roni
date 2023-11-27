// TypeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';

function TypeDetail() {
  const { typeName } = useParams();
  const [typeDetails, setTypeDetails] = useState(null);

  useEffect(() => {
    axios.get(`/type/${typeName}`)
      .then(response => setTypeDetails(response.data))
      .catch(error => console.error(error));
  }, [typeName]);

  return (
    <div>
      <h2>{typeName} Pokémon</h2>
      {typeDetails && (
        <ul>
          {typeDetails.pokemon.map(pokemon => (
            <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TypeDetail;
