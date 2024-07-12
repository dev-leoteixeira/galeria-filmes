import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Importe o ícone de coração
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";
import movies from "../../movies.json"; // Importar o arquivo JSON
import MovieCard from "../../components/Card/MovieCard";
import { toast } from "react-toastify";

const Movies = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setMovieList(movies);
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (movie) => {
    if (favorites.find((fav) => fav.id === movie.id)) {
      toast.error("Filme já está nos favoritos");
      return;
    }
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    toast.success("Filme adicionado aos favoritos");
  };

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Lista de Filmes</Style.Title>
        <Style.Icon onClick={() => navigate("/favorites")}>
          <FaHeart size={24} />
        </Style.Icon>
      </Style.Header>
      <div>
        <Style.MovieGrid>
          {movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddFavorite={addFavorite}
            />
          ))}
        </Style.MovieGrid>
      </div>
      <Style.LogoffButton onClick={() => [signout(), navigate("/")]}>
        Sair
      </Style.LogoffButton>
    </Style.Container>
  );
};

export default Movies;
