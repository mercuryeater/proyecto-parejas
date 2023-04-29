import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/MovieList/MovieList";
import { movies as movieList } from "./assets/data";

import MovieListFC from "./Components/MovieList/MovieList.jsx";

function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectMovie, setSelectMovie] = useState(null);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSelect = (movie) => {
    setSelectMovie(movie);
  };

  const deleteMovie = (toDeleteMovie) => {
    setMovies([...movies, toDeleteMovie]);
  };

  return (
    <>
      <Header />
      <AddMovie onAddMovie={handleAddMovie} selectMovie={selectMovie} />
      <MovieList movies={movies} onSelectMovie={handleSelect} />
      <MovieListFC movieList={movies} />
    </>
  );
}

export default App;
