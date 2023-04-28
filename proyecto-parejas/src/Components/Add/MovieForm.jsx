import { useState } from "react";
import "./movieForm.css"

function AddMovie({onAddMovie}) {
  const [movie, setMovie] = useState({});

  const handleAdd = (event) => {
    event.preventDefault();
    
    const newMovie = {
      ...movie, id: Date.now()
    }
    onAddMovie(newMovie)
  
    // Clear form
      setMovie("");
  
  };
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setMovie({
      ...movie,
      [name]: value,
    });
  };
  

  
  // const handleReset = ()=>{
  // }

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
              />
            </div>
            <div className="add-form__column">
              <label className="add-form__label">Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="Add Rating 0/10"
                className="add-form__input"
                required
                onChange={handleChange}
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
              />
            </div>
            <div className="add-form__column">
              <label className="contact-form__label">Year</label>
              <input
                type="number"
                name="year"
                className="add-form__input"
                placeholder="Add movie year"
                onChange={handleChange}
              />
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
