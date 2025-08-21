// src/pages/Reading.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCards } from '../services/services';
import './Reading.css';

const Reading = () => {
  const [allCards, setAllCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: inicio, 1: barajando, 2: resultado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await getAllCards();
      setAllCards(cardsData);
      setLoading(false);
    };
    fetchCards();
  }, []);

  const startReading = async () => {
    setIsReading(true);
    setCurrentStep(1);
    
    // Simular barajado con animación
    setTimeout(() => {
      // Seleccionar 3 cartas aleatorias
      const shuffled = [...allCards].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 3);
      
      setSelectedCards(selected);
      setCurrentStep(2);
      setIsReading(false);
    }, 3000);
  };

  const resetReading = () => {
    setSelectedCards([]);
    setCurrentStep(0);
    setIsReading(false);
  };

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="reading-page">
      <div className="reading-container">
        
        {/* Header */}
        <div className="reading-header">
          <h1 className="reading-title">🔮 Lectura de 3 Cartas</h1>
          <p className="reading-subtitle">
            Descubre la sabiduría del pasado, presente y futuro
          </p>
        </div>

        {/* Paso 0: Inicio */}
        {currentStep === 0 && (
          <div className="reading-intro">
            <div className="intro-content">
              <h2>Prepárate para tu lectura</h2>
              <p>
                “Tira tus cartas, descubre tu futuro y conecta con la fuerza de mujeres que revolucionaron la ciencia. Los arcanos tienen un mensaje para ti.”
              </p>
              
              <div className="card-meanings">
                <div className="meaning-card">
                  <h3>🏺 Carta 1: Pasado</h3>
                  <p>Influencias y lecciones del pasado</p>
                </div>
                <div className="meaning-card">
                  <h3>⚡ Carta 2: Presente</h3>
                  <p>Tu situación actual y energías</p>
                </div>
                <div className="meaning-card">
                  <h3>🌌 Carta 3: Futuro</h3>
                  <p>Potencial y camino hacia adelante</p>
                </div>
              </div>
              
              <div className="reading-actions">
                <button 
                className="btn" 
                onClick={startReading}
                disabled={isReading}
                >
                Comenzar Lectura
                </button>
                <Link to="/" className="btn">
              ← Volver a las cartas
              </Link>
              </div>
            </div>

          </div>
        )}

        {/* Paso 1: Barajando */}
        {currentStep === 1 && (
          <div className="shuffling-section">
            <h2>🃏 Barajando las cartas...</h2>
            <div className="shuffling-animation">
              <div className="card-back card-1"></div>
              <div className="card-back card-2"></div>
              <div className="card-back card-3"></div>
            </div>
            <p>Las energías se están alineando...</p>
          </div>
        )}

        {/* Paso 2: Resultado */}
        {currentStep === 2 && selectedCards.length === 3 && (
          <div className="reading-result">
            <h2>✨ Tu lectura está lista</h2>
            
            <div className="cards-spread">
              {selectedCards.map((card, index) => (
                <div key={card.id} className={`reading-card position-${index}`}>
                  <div className="position-label">
                    {index === 0 && "🌅 Pasado"}
                    {index === 1 && "⚡ Presente"} 
                    {index === 2 && "🌟 Futuro"}
                  </div>
                  
                  <Link to={`/card/${card.id}`} className="card-link">
                    <div className="card-image">
                      <img 
                        src={card.arcaneImage.imageSrc} 
                        alt={card.arcaneName}
                      />
                    </div>
                    <div className="card-info">
                      <h3>{card.arcaneName}</h3>
                      <p className="goddess-name">{card.goddessName}</p>
                    </div>
                  </Link>
                  
                  <div className="position-interpretation">
                    {index === 0 && (
                      <p>
                        <strong>{card.goddessName}</strong> te recuerda que el pasado 
                        es la base de tu sabiduría. {card.arcaneName} sugiere que las 
                        experiencias previas han moldeado tu perspectiva actual.
                      </p>
                    )}
                    {index === 1 && (
                      <p>
                        En el presente, <strong>{card.goddessName}</strong> te inspira 
                        con su innovación. {card.arcaneName} indica que es momento de 
                        aplicar tu conocimiento con confianza.
                      </p>
                    )}
                    {index === 2 && (
                      <p>
                        El futuro se ilumina con la visión de <strong>{card.goddessName}</strong>. 
                        {card.arcaneName} promete nuevos descubrimientos si sigues tu intuición 
                        y determinación.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="reading-actions">
              <button className="btn new-reading-btn" onClick={resetReading}>
                Nueva Lectura
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reading;