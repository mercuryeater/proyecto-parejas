import "./MovieList.css";
import { useState } from "react";

function MovieList({ movieList = [], onSelectedMovie, onDeleteMovie }) {
  const [updatedMovies, setUpdatedMovies] = useState(movieList);

  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/movies/${id}`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    movieList.map((movie) => {
      if (movie.id === id) {
        const newMovies = movieList.filter((movie) => movie.id !== id);
        onDeleteMovie(newMovies);
      }
    });
  };

  const handleEdit = (movie) => {
    const editMovie = movie;
    onSelectedMovie(editMovie);
  };

  return (
    <div className="list__container">
      <div className="list__container__test">
        <h2 className="list__container__title">Your ratings...</h2>
      </div>
      <table className="movie__list">
        <thead>
          <tr className="movie__list__titles">
            <th>Movie</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rating</th>
            <th></th>
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
                <button
                  onClick={() => {
                    handleDelete(movie.id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
