import "./MovieList.css";
function MovieList({movieList}) {
    const handleDelete = (event) => {
        console.log('Delete pressed')
    };

    const handleEdit = (event) => {
        console.log('Edit pressed')
    };

  return (
    <div>
      <h2>Películas</h2>
      <table className="movie__list">
        <tr className="movie__list__titles">
            <th>Movie</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rating</th>
        </tr>
        
        {movieList.map( (movie) => (
            <tr key={movie.id} className="movie__list__item">
                <td>{movie.name}    </td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td><button onClick={handleDelete}>borrar</button>
                <button onClick={handleEdit}>editar</button></td>
            </tr>
        ))}        
      </table>
    </div>
  );
}

export default MovieList;
