import "./MovieList.css";
function MovieList({movieList}) {
  return (
    <div>
      <h1>Películas</h1>
      <div className="movie__list">
        {movieList.map( (movie) => (
            <div key={movie.id} className="movie__list__item">
                <h3>{movie.name}    </h3>
                <h3>{movie.year}</h3>
                <h3>{movie.genre}</h3>
                <h3>{movie.rating}</h3>
            </div>
        ))}        
      </div>
    </div>
  );
}

export default MovieList;
