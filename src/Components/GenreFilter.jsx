import React, { useContext } from 'react'

const GenreFilter = ({genreList,setSelectedGenre}) => {
  return (
     <select className='p-2 mb-4 bg-gray-500 bg-opacity-60 backdrop-blur-md text-white border rounded'
     onChange={(e)=> setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genreList.map((genre) => {
            return (
              <option  key={genre}  value={genre.Id}>
                    {genre.name}
              </option>
            );
          })}
     </select>
  );
};

export default GenreFilter