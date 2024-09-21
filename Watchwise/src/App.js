import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import FavMovie from './FavMovie'
import Navbar from './Navbar'
import Home from './Home'
import Tvlist from './Tvlist'
import FavTv from './FavTv'
import Pagination from './Pagination'

export default function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [currentMoviePage, setCurrentMoviePage] = useState(100);
  const [currentSeriesPage, setCurrentSeriesPage] = useState(1);
  const [totalMoviePages, setTotalMoviePages] = useState(0)
  const [totalSeriesPages, setTotalSeriesPages] = useState(0)
  const fetchMovies = async (page) => {
    try {
      const reponse = await fetch(`Api-key${page}`);
      const result = await reponse.json()
      setMovies(result.results);
      setTotalMoviePages(result.total_pages);

    } catch (error) {
      console.log("error", error)
    }
  }
  const fetchSeries = async (page) => {
    try {
      const reponse = await fetch(`Api-key${page}`);
      const result = await reponse.json()
      setSeries(result.results);
      setTotalMoviePages(result.total_pages);

    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    fetchMovies(currentMoviePage)
    fetchSeries(currentSeriesPage)
  }, [currentMoviePage, currentSeriesPage])
  const handleMovieSearch = async (query) => {
    try {
      const response = await fetch(`Api-key`);
      const result = await response.json();
      setMovies(result.results);
      setTotalMoviePages(result.total_pages);

    } catch (error) {
      console.log("error", error)
    }
  }

  const handlePageChange = (page) => {
    setCurrentMoviePage(page)
  }
  return (
    <div>

      <BrowserRouter>
        <Navbar onSearch={handleMovieSearch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/movies" element={<div>
            <MovieList movies={movies} />
            <Pagination currentPage={currentMoviePage} totalPages={totalMoviePages} onPageChange={handlePageChange} />
          </div>} />
          <Route path='/favmov' element={<FavMovie />} />
          <Route path='tv' element={<Tvlist series={series} />} />
          <Route path='/favTv' element={<FavTv />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}