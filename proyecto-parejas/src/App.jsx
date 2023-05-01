import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/MovieList/MovieList";
import { movies as movieList } from "./assets/data";
import Header from "./Components/Header/Header";

import MovieListFC from "./Components/MovieList/MovieList.jsx";

function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSelect = (movie) => {
    setSelectedMovie(movie);
    console.log(movie);
  };

  const deleteMovie = (toDeleteMovie) => {
    setMovies([...movies, toDeleteMovie]);
  };

  return (
    <>
      <Header />
      <AddMovie onAddMovie={handleAddMovie} selectedMovie={selectedMovie} />
      <MovieList movieList={movies} onSelectedMovie={handleSelect} />
    </>
  );
}

export default App;
