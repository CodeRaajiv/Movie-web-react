import React from 'react'
import {Link} from 'react-router-dom';
import { WatchListContext } from '../Context/WatchListContext';
import { useContext } from 'react';
const Navbar = () => {
  const {watchlist} = useContext(WatchListContext);
  return (
    <nav className='bg-black p-4 text-white flex 
    justify-between fixed w-full top-0 z-10'>
         <Link to="/" className='text-xl font-bold'>
         Moive App
         </Link>
         <Link to="/Watchlist" className='text-xl'>
         Watchlist({watchlist.length})
         </Link>
    </nav>
  );
};
export default Navbar