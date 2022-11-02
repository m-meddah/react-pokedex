import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white m-3">
      <h1><NavLink to="/">Pokédex</NavLink></h1>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/types">Liste des Types</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
