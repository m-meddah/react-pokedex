import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function PokemonList({ pokemons }) {
  return (
    <main className="container-fluid">
      <ul className="pokemon-list reset-list row">
        {pokemons.map(({
          id, name, image, slug
        }) => (
          <li className="p-3 col-lg-4" key={id}>
            <Link to={`/${slug}`} element={<PokemonDetails pokemons={pokemons} />}>
              <figure className="p-3">
                <img src={image} alt={name} />
                <figcaption>#{id} {name}</figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PokemonList;
