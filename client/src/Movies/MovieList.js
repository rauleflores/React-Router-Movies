import React from "react";
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

const MovieList = (props) => {
  // console.log("MovieList props", props);
  // console.log(props.movies);

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  return (
    <NavLink to={`/movies/` + movie.id} activeClassName="movie-card">
      <MovieCard movie={movie} />
    </NavLink>
  );
}

export default MovieList;
