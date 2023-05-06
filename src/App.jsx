import { useState, useEffect } from "react";
import "./App.css";
import AddMovie from "./Components/Add/MovieForm";
import MovieList from "./Components/MovieList/MovieList";
// import { movies as movieList } from "./assets/data";
import Header from "./Components/Header/Header";
import EditMovie from "./Components/EditMovie/EditMovie";

function App() {
  const [movies, setMovies] = useState();
  const [selectedMovie, setSelectedMovie] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleSelect = (movie) => {
    setSelectedMovie(Object.assign({}, movie));
    setIsEditing(true);
  };

  const handleEditMovie = () => {
    setMovies([...movies]);
  };

  const deleteMovie = (newArr) => {
    setMovies(newArr);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/api/movies`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <div className="movieContainer">
        <MovieList
          movieList={movies}
          onSelectedMovie={handleSelect}
          onDeleteMovie={deleteMovie}
        />
        {isEditing ? (
          <EditMovie
            onEditMovie={handleEditMovie}
            selectedMovie={selectedMovie}
            isEditing={isEditing}
            movies={movies}
            setIsEditing={setIsEditing}
          />
        ) : (
          <AddMovie
            onAddMovie={handleAddMovie}
            selectedMovie={selectedMovie}
            isEditing={isEditing}
            movies={movies}
          />
        )}
      </div>
    </>
  );
}

export default App;
