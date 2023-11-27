// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TypeDetail from './components/TypeDetail';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type/:typeName" element={<TypeDetail />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
