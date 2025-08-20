import React, { useContext,useState } from 'react'
import GenreFilter from '../Components/GenreFilter'
import { WatchListContext } from '../Context/WatchListContext'
import Moviecard from '../Components/Moviecard'
const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const { watchlist,genreList } = useContext(WatchListContext);
  const [Search,setSearch] = useState("");
  const [selectedGenre,setSelectedGenre] = useState("");
  const filterdMovies = watchlist.filter( (movie) => 
    movie.Title.toLowerCase().includes
  (Search.toLowerCase())
  ).filter((movie)=>{
    return !selectedGenre || movie.genre_ID.includes
    (Number(selectedGenre));
  });
  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...'
        className='p-2 w-3/4 md:w-1/2 border rounded-4xl
       border-gray-200  bg-gray-500 bg-opacity-60
       backdrop-blur-md text-white fixed top-16 left-1/2
       transform -translate-x-1/2 z-10'
       onChange={(e)=>setSearch(e.target.value)}
       />
      <div className='mt-16 flex justify-center'>
        <GenreFilter genreList={genreList} setSelectedGenre
        ={setSelectedGenre}/>
      </div>
      <div className="movies-container grid grid-cols-2
      md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
        {filterdMovies.map((movie) => (
          <Moviecard key={movie.imdbID} movie={movie}/>
        ))}
      </div>
    </div>
  )
}
export default Watchlist