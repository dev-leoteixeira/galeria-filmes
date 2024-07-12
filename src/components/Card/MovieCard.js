import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal"; // Ajuste o caminho conforme necessário
import * as Style from "./styles"; // Importe os estilos específicos para o MovieCard

const MovieCard = ({ movie, onAddFavorite, onRemoveFavorite }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Style.Card>
      <img src={movie.image} alt={movie.title} />
      <h3>
        {movie.title} ({movie.year})
      </h3>
      <p>Duração: {movie.duration}</p>
      <p>Classificação: {movie.rating}</p>
      <button onClick={() => setShowTrailer(true)}>Assitir Trailer</button>
      <button onClick={() => setShowDetails(true)}>Sinopse</button>
      {onAddFavorite && (
        <button onClick={() => onAddFavorite(movie)}>
          Adicionar aos Favoritos
        </button>
      )}
      {onRemoveFavorite && (
        <button onClick={() => onRemoveFavorite(movie.id)}>
          Remover dos Favoritos
        </button>
      )}

      <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
        <h3>
          {movie.title} ({movie.year})
        </h3>
        <p>{movie.description}</p>
      </Modal>

      <Modal isOpen={showTrailer} onClose={() => setShowTrailer(false)}>
        <iframe
          width="100%"
          height="315"
          src={getEmbedUrl(movie.trailer)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </Style.Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
};

export default MovieCard;
