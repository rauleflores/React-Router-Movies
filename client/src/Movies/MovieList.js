import React from "react";
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
  const { title, director, metascore, stars } = movie;
  return (
    <NavLink to={`/movies/` + movie.id} activeClassName="movie-card">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </NavLink>
  );
}

export default MovieList;
