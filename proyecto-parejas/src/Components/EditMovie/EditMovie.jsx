import { useState } from "react";
import "./EditMovie.css";


function AddMovie({ onEditMovie, selectedMovie, movies }) {
  const [editedMovie, setEditedMovie] = useState(selectedMovie);

  const handleUpdate = (event) => {
    event.preventDefault();

    //AQUI DEBO HACER QUE SE EDITE Y UPDATEE EL SELECCIONADO
    movies.map( movie => {
        if (movie.id === selectedMovie.id) {
            // console.log(selectedMovie)
            onEditMovie(Object.assign(movie, editedMovie))            
        }
    })

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
      <h2 className="add-form__title">Edit Movie</h2>
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
              <option value="9">10</option>
            </select>
          </div>
        </div>

        <button type="submit" className="add-form__button">
          Update
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
