import React from 'react'
import Moviecard from '../Components/Moviecard'
import { useEffect, useState } from 'react'
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    let url = (`https://www.omdbapi.com/?s=Movie&page=${page}&apikey=7516fa53`);
    if (Search) {
      url = (`https://www.omdbapi.com/?&s=${Search}&apikey=7516fa53&s=Movie`);
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, [page, Search]);
  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...'
        className='p-2 w-3/4 md:w-1/2 border rounded-4xl
       border-gray-200  bg-gray-500 bg-opacity-60
       backdrop-blur-md text-white fixed top-16 left-1/2
       transform -translate-x-1/2 z-10'
       onChange={(e)=>setSearch(e.target.value)}
       />
      <div className="movies-container grid grid-cols-2
      md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
        {movies.map((movie) => (
          <Moviecard key={movie.imdbID} movie={movie}/>
        ))}
      </div>
      <div className="pagination-container flex justify-between mt-5">
        <button disabled={page == 1} className='bg-black p-2 text-white rounded font-semibold' 
        onClick={() => { setpage(prev => prev - 1); }}>
          PREVIOUS</button>
        <button className='bg-black p-2 text-white rounded font-semibold' onClick={() => { setpage(prev => prev + 1); }}>
          NEXT</button>
      </div>
    </div>
  )
}
export default Home