import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/Add/movieList";
import {movies as movieList} from './assets/data'

function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectMovie, setSelectMovie] = useState(null)

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSelect = (movie)=>{
setSelectMovie(movie)
  }

  return (
    <>
      <AddMovie onAddMovie={handleAddMovie} selectMovie = {selectMovie} />
      <MovieList movies={movies} onSelectMovie = {handleSelect}/>
    </>
  );
}

export default App;
