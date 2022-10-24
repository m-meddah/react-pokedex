import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

function PokemonDetails({ pokemons }) {
  const URL = useParams();
  const id = Number(URL.id);
  const selectedPokemon = pokemons.find((pokemon) => pokemon.id === id);
  return (
    <section className="pokemon-detail row" key={selectedPokemon.id}>
      <div className="col-lg-12">
        <div className="container-fluid">
          <header className="row">
            <h2 className="col-lg-12 text-center text-white mb-3">Détails de {selectedPokemon.name}</h2>
          </header>
          <main className="row">
            <div className="col-lg-4 image">
              <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            </div>
            <div className="col-lg-8 fiche p-3">
              <h3 className="mt-4">#{selectedPokemon.id} {selectedPokemon.name}</h3>

              <ul className="type-list reset-list d-inline-flex mt-2 mb-3">
                {selectedPokemon.apiTypes.map((type) => <li><Link key={type.name} to="#" className="rounded d-block mr-2 p-2 type-{type.name}">{type.name}</Link></li>)}
              </ul>
              <h4 className="mb-4">Statistiques</h4>
              <div className="stats container-fluid.no-gutters mb-4">

                <div className="row">
                  <div className="col-2">PV</div>
                  <div className="col-2">{selectedPokemon.stats.HP}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span style={{ width: selectedPokemon.stats.HP / 255 * 100 }} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Attaque</div>
                  <div className="col-2">{selectedPokemon.stats.attack}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span
                      style={{ width: selectedPokemon.stats.attack / 255 * 100 }}
                    />
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Défense</div>
                  <div className="col-2">{selectedPokemon.stats.defense}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span
                      style={{ width: selectedPokemon.stats.defense / 255 * 100 }}
                    />
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Attaque Spé.</div>
                  <div className="col-2">{selectedPokemon.stats.special_attack}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span
                      style={{ width: selectedPokemon.stats.special_attack / 255 * 100 }}
                    />
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Défense Spé.</div>
                  <div className="col-2">{selectedPokemon.stats.special_defense}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span
                      style={{ width: selectedPokemon.stats.special_defense / 255 * 100 }}
                    />
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Vitesse</div>
                  <div className="col-2">{selectedPokemon.stats.speed}</div>
                  <div className="col-8">
                    <div className="status-bar rounded overflow-hidden"><span
                      style={{ width: selectedPokemon.stats.speed / 255 * 100 }}
                    />
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="text-center">
            <Link to="/">Revenir à la liste</Link>
          </footer>
        </div>
      </div>
    </section>
  );
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      apiTypes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired,
      ).isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          HP: PropTypes.number.isRequired,
          attack: PropTypes.number.isRequired,
          defense: PropTypes.number.isRequired,
          special_attack: PropTypes.number.isRequired,
          special_defense: PropTypes.number.isRequired,
          speed: PropTypes.number.isRequired,
        })
      )
    }).isRequired
  ).isRequired,

};

export default PokemonDetails;
