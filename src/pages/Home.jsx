import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { searchMovies, getPoplarMovies } from "../services/api";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPoplarMovies()
        setmovies(popularMovies)
      }catch (err) {
        console.log(err)
        seterror('Failed to load Movies....')
      }
      finally {
        setloading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setloading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setmovies(searchResults)
      seterror(null)
    }catch (err) {
      console.log(err)
      seterror('Failed to search movies....')
    }finally {
      setloading(null)
    }

    //setsearchQuery(''); to set the string to blank after search...
  }

  return(
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search for movies..." 
        className="search-input"
        value = {searchQuery}
        onChange={(e) => {setsearchQuery(e.target.value)}}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div> 
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home;