import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../Context/WatchListContext";

const Moviecard = ({ movie }) => {
  const { toggleWatchlist, watchlist } = useContext(WatchListContext);
  const inWatchList = watchlist.some((m) => m.imdbID === movie.imdbID);

  return (
    <div 
   className="bg-gray-700 p-4 rounded-lg shadow-md text-white relative">
      <img
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-80 object-contain rounded-md"
      />

      <h3 className="text-lg font-bold mt-4">{movie.Title}</h3>
      <p className="text-sm text-gray-300">{movie.Year}</p>

      <button
        className="absolute top-2 right-2 text-red-500 text-3xl"
        onClick={() => toggleWatchlist(movie)}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
