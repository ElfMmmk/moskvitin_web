import { useEffect, useState } from 'react'
import axios from 'axios'
import './TileSet.css'

const TileSet = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/movies/')
      .then(res => setMovies(res.data))
  }, [])
  
  return (
    <div className='tileset'>
      { movies.map(movie => {
        return (
          <div className="tileset__tile tile">
            <img src={ movie.cover } alt="Фильм" className="tile__image" />
            <p className='tile__name'>{ movie.title }</p>
          </div>
        )})
      }
    </div>
  )
}

export default TileSet
