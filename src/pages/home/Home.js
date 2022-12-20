// Style  
import axios from "axios"
import { useEffect, useState } from "react"
import Search from "../../component/search"
import Slider from "../../component/slider"
import  "./Home.css"


export default function Home() {
  const [seriesData, setSeriesData] = useState(null)
  const [seriesError, setSeriesError] = useState(null)
  const [seriesLoading, setSeriesLoading] = useState(false)
  const [movieError, setMovieError] = useState(null)
  const [movieLoading, setMovieLoading] = useState(false)
  const [movieData, setMovieData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    if(searchTerm !== ''){
      setSeriesLoading(true)
      try{
      axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=series&&apikey=c2571a6a`)
      .then(res => {
        if(!res || res.data.Response === 'False'){
          setSeriesLoading(false)
          throw new Error('No Series found')
        }
        setSeriesData(res.data)
        setSeriesLoading(false)
      })
      }catch(err){
        setSeriesError(err.message)
        setSeriesLoading(false)
        console.log(err.message)
      }
    }
  },[searchTerm])

  useEffect(()=>{
    if(searchTerm !== ''){
      setMovieLoading(true)
      try{
      axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&&apikey=c2571a6a`)
      .then(res => {
        if(!res || res.data.Response === 'False'){
          setMovieLoading(false)
          throw new Error('No Series found')
        }
        console.log(res)
        setMovieData(res.data)
        setMovieLoading(false)
      })
      }catch(err){
        setMovieError(err.message)
        setMovieLoading(false)
      }
    }
  },[searchTerm])




  return (
    <div >
      <div className="section1">
        <h1>Watch something incredible.</h1>
      </div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-container">
        <div className="movies">
          <p className="category-title">Movies</p>
          <div className="clip">
            {movieError && <p className="error">{movieError}</p>}
            {movieData !== null ? (movieLoading ? <p className="loading">Loading...</p> : movieData.Search !== null && movieData.Search.map((movie) => <Slider key={movie.imdbID} poster={movie.Poster} title={movie.Title}  />)): <p className="error">Search movie Name</p>}
          </div>
        </div>
        <div className="movies">
          <p className="category-title">Series</p>
          <div className="clip">
            {seriesError && <p className="error">{seriesError}</p>}
            {seriesData !== null ? (seriesLoading ? <p className="loading">Loading...</p> : seriesData.Search !== null && seriesData.Search.map((movie, index) => <Slider key={movie.imdbID} poster={movie.Poster} title={movie.Title}  />)) : <p className="error">Search movie Name</p> }
          </div>
        </div>
      </div>
    </div>
  )
}