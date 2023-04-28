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

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  

  return (
    <>
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
