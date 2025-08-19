// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="texto-inicio">
          <h1>🔮 Diosas Contemporáneas</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="button-inicio">Inicio</Link>
          <Link to="/reading" className="button-lectura">Lectura de Cartas</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;