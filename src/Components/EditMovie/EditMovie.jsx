import { useState } from "react";
import "./EditMovie.css";

function AddMovie({ onEditMovie, selectedMovie, movies, setIsEditing }) {
  const [editedMovie, setEditedMovie] = useState(selectedMovie);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedMovie),
      };

      const url = `${import.meta.env.VITE_BASE_URL}/api/movies/:id`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    //AQUI DEBO HACER QUE SE EDITE Y UPDATEE EL SELECCIONADO
    movies.map((movie) => {
      if (movie.id === selectedMovie.id) {
        setEditedMovie(Object.assign(movie, editedMovie));
      }
    });
    onEditMovie(editedMovie);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditedMovie({
      ...editedMovie,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="container__title">
        <h2 className="container__title__text">Edit Movie</h2>
      </div>
      <form className="add-form" onSubmit={handleUpdate}>
        <div>
          <div className="add-form__column">
            <label className="add-form__label">Movie</label>
            <input
              type="text"
              name="name"
              placeholder="Movie name"
              className="add-form__input"
              required
              onChange={handleChange}
              value={editedMovie.name}
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Year</label>
            <input
              type="number"
              name="year"
              className="add-form__input"
              placeholder="Add Movie Year"
              onChange={handleChange}
              value={editedMovie.year}
              min="1895"
              max="2023"
              required
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Genre</label>
            <input
              type="text"
              name="genre"
              className="add-form__input"
              placeholder="Add Genre"
              onChange={handleChange}
              value={editedMovie.genre}
              required
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Rating</label>
            <select
              name="rating"
              id="rating"
              className="add-form__input--rating"
              required
              onChange={handleChange}
              value={editedMovie.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="update__button">
            Update
          </button>
          <button onClick={() => setIsEditing(false)} className="exit__button">
            Exit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
