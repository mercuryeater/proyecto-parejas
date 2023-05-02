import "./MovieList.css";
import { useState} from "react";

function MovieList({ movieList = [], onSelectedMovie, onDeleteMovie }) {
  const [updatedMovies, setUpdatedMovies] = useState(movieList);

  const handleDelete = (id) => {
    console.log("Delete pressed");
    console.log(`El id es: ${id}`)
    //YA IDENTIFICA EL ID DEL BOTON DE BORRAR, AHORA QUE RECORRA 
    //Y FILTRE FUERA EL QUE TENGA EL MISMO ID
    movieList.map((movie) => {
      if (movie.id === id) {
        const newmovies = movieList.filter(movie => movie.id !== id)
        onDeleteMovie(newmovies);
      } 
    })

  };

  const handleEdit = (movie) => {
    const editMovie = movie;
    onSelectedMovie(editMovie);
  };

  return (
    <div>
      <h2 className="container__title">Movies</h2>
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
          {movieList.map((movie) => (
            <tr key={movie.id} className="movie__list__item">
              <td className="movie__list__item--name">{movie.name}</td>
              <td className="movie__list__item--year">{movie.year}</td>
              <td className="movie__list__item--genre">{movie.genre}</td>
              <td className="movie__list__item--rating">{movie.rating}</td>

              <td>
                <button onClick={() => handleEdit(movie)}>edit</button>
                <button onClick={() => {handleDelete(movie.id)}}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
