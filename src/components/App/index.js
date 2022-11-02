import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetails from './PokemonDetails/PokemonDetails';

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
        <Route path="/" element={<PokemonList pokemons={pokemons} />} />
        <Route path="/:slug" element={<PokemonDetails pokemons={pokemons} />} />
      </Routes>
    </div>
  );
}

export default App;
