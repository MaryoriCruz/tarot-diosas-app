// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCards } from '../services/services';
import './Home.css';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await getAllCards();
      setCards(cardsData);
      setLoading(false);
    };
    fetchCards();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="home">
      <h1 className="home-title">Cartas del Tarot</h1>
      <p className="home-subtitle">Descubre la sabiduría de las mujeres que revolucionaron la ciencia y tecnología</p>
      
      <div className="cards-grid">
        {cards.map((card) => (
          <Link 
            key={card.id} 
            to={`/card/${card.id}`} 
            className="card-link"
          >
            <div className="card-preview">
              <div className="card-image">
                {card.arcaneImage && (
                  <img 
                    src={card.arcaneImage.imageSrc} 
                    alt={card.arcaneName}
                  />
                )}
              </div>
              <div className="card-info">
                <h3 className="arcane-name">{card.arcaneName}</h3>
                <p className="goddess-name">{card.goddessName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;