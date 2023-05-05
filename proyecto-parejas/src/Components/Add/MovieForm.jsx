import { useState } from "react";
import "./movieForm.css";

const defaultMovie = {
  name: "",
  year: "",
  genre: "",
  rating: "",
};
function AddMovie({ onAddMovie, isEditing }) {
  const [movie, setMovie] = useState(defaultMovie);

  const handleAdd = (event) => {
    event.preventDefault();

    const newMovie = {
      ...movie,
      id: Date.now(),
    };
    onAddMovie(newMovie);
    
    // Clear form
    setMovie(defaultMovie);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2 className="add-form__title">Add New Movie</h2>
      <form className="add-form" onSubmit={handleAdd}>
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
              value={movie.name}
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
              min="1895"
              max="2023"
              value={movie.year}
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
              value={movie.genre}
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
              value={movie.rating}
            >
              <option value="head"></option>
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

        <button type="submit" className="add-form__button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
