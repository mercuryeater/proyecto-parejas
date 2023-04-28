import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/Add/movieList";

const pelis = [
  {
    id: 1,
    name: "lord of the rings: the two towers",
    rating: "8.8/10",
    genre: "Action",
    year: "2002",
  },
  {
    id: 2,
    name: "lord of the rings: the fellowship of the rings",
    rating: "8.1/10",
    genre: "Action",
    year: "1998",
  },
];

function App() {
  const [movies, setMovies] = useState(pelis);
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
