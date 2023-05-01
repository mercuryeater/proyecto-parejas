import "./MovieList.css";
import { useState } from "react";
// import MovieInfo from "../Add/movieInfo"

function MovieList({movieList=[] }, onSelectMovie) {
  // const { name, rating, genre, year, onSelectMovie } = props;

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
              
                  <td>{movie.name}</td>
                  <td>{movie.year}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                
                  <td><button onClick={ () =>{handleDelete(index)}}>borrar</button>
                  <button onClick={handleEdit}>editar</button></td>
              </tr>
        ))}
        </tbody>        
      </table>
    </div>
  );
}

export default MovieList;
