import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    let url = (`https://www.omdbapi.com/?s=genre&apikey=7516fa53`); 
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGenreList(data.genre || []));
  }, []);

  const toggleWatchlist = (movie) => {
    setWatchlist((prevList) => {
      const exists = prevList.some((m) => m.id === movie.id);
      if (exists) {
        return prevList.filter((m) => m.id !== movie.id);
      } else {
        return [...prevList, movie];
      }
    });
  };

  return (
    <WatchListContext.Provider value={{ watchlist, toggleWatchlist, genreList }}>
      {children}
    </WatchListContext.Provider>
  );
};
