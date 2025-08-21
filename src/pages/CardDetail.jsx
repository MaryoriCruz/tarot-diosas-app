// src/pages/CardDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services/services";
import './CardDetail.css';

function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      const data = await getCardById(id);
      setCard(data);
    }
    fetchCard();
  }, [id]);

  if (!card) return <div className="loading">Cargando...</div>;

  return (
    <div className="card-detail">
      {/* Botón volver */}
      <Link to="/" className="btn">
        ← Volver a las cartas
      </Link>

      <div className="detail-container">
        {/* Sección del Arcano */}
        <div className="arcane-section">
          <div className="arcane-image">
            <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} />
          </div>
          <div className="arcane-info">
            <h1 className="arcane-title">{card.arcaneName}</h1>
            <p className="arcane-description">{card.arcaneDescription}</p>
          </div>
        </div>

        {/* Separador */}
        <div className="section-divider"></div>

        {/* Sección de la Diosa/Científica */}
        <div className="goddess-section">
          <div className="goddess-info">
            <h2 className="goddess-title">La Diosa Contemporánea: {card.goddessName}</h2>
            <p className="goddess-description">{card.goddessDescription}</p>
          </div>
          <div className="goddess-image">
            <img src={card.goddessImage.imageSrc} alt={card.goddessName} />
            <p className="image-credit">
              Crédito: {card.goddessImage.imageCredit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;