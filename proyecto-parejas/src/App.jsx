import { useState } from 'react'
import './App.css'
import {movies as movieList} from './assets/data'
import MovieList from "./Components/MovieList/MovieList.jsx"

function App() {
  const [movies, setMovies] = useState(movieList)

  const deleteMovie = (toDeleteMovie) => {
    setMovies([
      ...movies,
      toDeleteMovie
    ])
  }

  return (
    <div className='everything'>
      <MovieList movieList={movies}/>
    </div>
  )
}

export default App
