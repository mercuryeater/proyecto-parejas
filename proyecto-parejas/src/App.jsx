import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/MovieList/MovieList";
import { movies as movieList } from "./assets/data";
import Header from "./Components/Header/Header";

function App() {
  const [movies, setMovies] = useState(movieList);
  const [selectedMovie, setSelectedMovie] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSelect = (movie) => {
    setSelectedMovie(movie);
    setIsEditing(true);
    console.log(movie);
    console.log(`Esto es selectedMovie: ${selectedMovie}`); 
  };

  // const deleteMovie = (toDeleteMovie) => {
  //   setMovies([toDeleteMovie]);
  // };

  return (
    <>
      <Header />
      <AddMovie onAddMovie={handleAddMovie} selectedMovie={selectedMovie} isEditing={isEditing} />
      <MovieList movieList={movies} onSelectedMovie={handleSelect} />
    </>
  );
}

export default App;
