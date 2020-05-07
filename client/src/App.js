import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  console.log("App.js", movieList);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        component={() => <MovieList movies={movieList} />}
      />
      <Route
        exact
        path="/movies/:id"
        component={() => <Movie movies={movieList} />}
      />
    </div>
  );
};

export default App;
