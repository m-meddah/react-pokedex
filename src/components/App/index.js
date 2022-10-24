import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetails from './PokemonDetails/PokemonDetails';

// == Composant
function App() {
  const [pokemons, setPokemons] = useState([]);

  const pokemonList = () => axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/151').then((response) => {
    setPokemons(response.data);
  }).catch((error) => console.error(error));

  useEffect(() => {
    pokemonList();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} setPokemons={setPokemons} />} />
        <Route path="/:id" element={<PokemonDetails pokemons={pokemons} setPokemons={setPokemons} />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
