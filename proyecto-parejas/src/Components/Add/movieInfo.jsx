// import { useState } from "react";
import "./movieInfo.css"

const MovieInfo = (props) => {
  const { name, rating, genre, year, onSelectMovie } = props;
  return (
    <tr className="movie-info" onClick ={onSelectMovie}>
      <td>{name}</td>
      <td>{rating}</td>
      <td>{genre}</td>
      <td>{year}</td>
    </tr>
  );
};

export default MovieInfo;
