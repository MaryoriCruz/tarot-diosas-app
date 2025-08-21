// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-background"></div>

        <div className="hero-content">
          {/* Símbolo */}
          <div className="mystic-symbol">🔮</div>

          {/* Subtítulo */}
          <p className="hero-subtitle">Tarot • Ciencia • Misterio</p>

          {/* Título fuerte */}
          <h1 className="hero-title">
            Descubre la energía <span>de los Arcanos</span>
          </h1>

          {/* Frase corta */}
          <p className="hero-text">
            Conecta con la magia y la sabiduría oculta.
          </p>

          {/* Botones */}
          <div className="hero-buttons">
            <Link to="/reading" className="btn btn-primary">
              Iniciar Lectura
            </Link>
            <Link to="/cards" className="btn btn-secondary">
              Explorar Arcanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
