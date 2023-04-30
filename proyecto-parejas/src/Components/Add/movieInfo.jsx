// import { useState } from "react";
import "./movieInfo.css"

const MovieInfo = ({props}) => {
  const { name, rating, genre, year, onSelectMovie } = props;
  return (
    <>
      <td>{name}</td>
      <td>{rating}</td>
      <td>{genre}</td>
      <td>{year}</td>
    </>
  );
};

export default MovieInfo;
