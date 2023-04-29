import "./MovieList.css";
import { useState } from "react";
import MovieInfo from "../Add/movieInfo"

function MovieList({movieList}) {

    const [updatedMovies, setUpdatedMovies] = useState(movieList)



    const handleDelete = (index) => {
        console.log('Delete pressed')
        const toDeleteMovie = [...updatedMovies]
        toDeleteMovie.splice(index, 1)
        setUpdatedMovies(toDeleteMovie)
    };

    const handleEdit = (event) => {
        console.log('Edit pressed')
        console.log(updatedMovies)
    };

  return (
    <div>
      <h2>Películas</h2>
      <table className="movie__list">
        <thead>
          <tr className="movie__list__titles">
              <th>Movie</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Rating</th>
          </tr>
        </thead>

        <tbody>        
          {movieList.map( (movie) => (
              <tr key={movie.id} className="movie__list__item">
              <MovieInfo
                  name={movie.name}
                  year={movie.year}
                  genre={movie.genre}
                  rating={movie.rating}
                />
                  <td><button onClick={ () =>{handleDelete(index)}}>borrar</button>
                  <button onClick={handleEdit}>editar</button></td>
              </tr>
        ))}
        </tbody>        
      </table>
    </div>
  );
}

export default MovieListFC;
