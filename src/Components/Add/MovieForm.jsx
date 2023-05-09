import { useState } from "react";
import "./movieForm.css";

const defaultMovie = {
  name: "",
  year: "",
  genre: "",
  rating: "",
};
function AddMovie({ onAddMovie, movies }) {
  const [movie, setMovie] = useState(defaultMovie);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      };
      const url = `${import.meta.env.VITE_BASE_URL}/api/movies`;

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setMovie(defaultMovie);
    } catch (error) {
      console.log("error");
    }

    function idAssignment() {
      //Hay un bug que cuando data del server esta vacio
      //SE ROMPE TODO
      const lastMovie = movies[movies.length - 1];
      const lastId = lastMovie.id;
      return lastId + 1;
    }

    const newMovie = {
      ...movie,
      id: idAssignment(),
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
      <div className="container__title">
        <h2 className="container__title__text">Add New Movie</h2>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
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
              value={movie.genre}
              required
            />
          </div>
          <div className="add-form__column">
            <label className="add-form__label">Rating</label>
            <select
              name="rating"
              id="rating"
              className="add-form__input--rating"
              onChange={handleChange}
              value={movie.rating}
              required
            >
              <option value="" disabled selected hidden>
                select
              </option>
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
