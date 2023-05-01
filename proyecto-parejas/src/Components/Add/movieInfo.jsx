// import { useState } from "react";
import "./movieInfo.css"

const MovieInfo = (props) => {
  const { name, rating, genre, year, onSelectMovie } = props;
  return (
    <div className="movie-info" onClick ={onSelectMovie}>
      <div>{name}</div>
      <div>{rating}</div>
      <div>{genre}</div>
      <div>{year}</div>
    </div>
  );
};

export default MovieInfo;
