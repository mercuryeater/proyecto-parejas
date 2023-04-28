import { useState } from 'react';


const MovieInfo =(props) =>{
    const {name, rating, genre, year} = props
return(
        <table>
          <tbody>
            <tr >
            <td>{name}</td>
            <td>{rating}</td>
            <td>{genre}</td>
            <td>{year}</td>
          </tr>
        
          </tbody>
        </table>

)
}

export default MovieInfo