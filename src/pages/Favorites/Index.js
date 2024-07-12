import React, { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard";
import * as Style from "./styles"; // Importe os estilos
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    toast.success("Filme removido dos favoritos");
  };

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Favoritos</Style.Title>
      </Style.Header>
      <div>
        <Style.MovieGrid>
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemoveFavorite={removeFavorite}
            />
          ))}
        </Style.MovieGrid>
      </div>

      <Style.BackButton onClick={() => navigate("/Movies")}>
        Voltar
      </Style.BackButton>
    </Style.Container>
  );
};

export default Favorites;
