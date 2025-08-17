// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
//import './Navbar.css';//

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <h1>🔮 Diosas Contemporáneas</h1>
          <p>Mujeres que revolucionan la ciencia y tecnología</p>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">🏠 Inicio</Link>
          <Link to="/reading" className="nav-link">✨ Lectura de Cartas</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;