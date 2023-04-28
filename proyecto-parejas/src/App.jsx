import { useState } from 'react'
import './App.css'
import {movies as movieList} from './assets/data'
import MovieList from "./components/MovieList/MovieList.jsx"

function App() {
  const [movies, setMovies] = useState(movieList)

  return (
    <div>
      <MovieList movieList={movies}/>
    </div>
  )
}

export default App
