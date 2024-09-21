import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar({ onSearch }) {
    return (
        <div>


            <nav className='navbar'>
                <h1 >WatchWise</h1>
                <ul className='nav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/tv">TV</Link>
                    </li>
                    <li>
                        <Link to="/favmov">Movie Library</Link>
                    </li>
                    <li>
                        <Link to="/favtv">TV Library</Link>
                    </li>
                </ul>
                <button className="dark-md-btn" onClick={() => {
                    document.body.classList.toggle('light-mode');
                    document.getElementById('light-mode-btn').classList.toggle('hidden');
                    document.getElementById('dark-mode-btn').classList.toggle('hidden');
                }}>
                    <div id="light-mode-btn">
                        <LightModeIcon sx={{ fontSize: 30, color: "inherit", padding: "6px" }} />
                    </div>
                    <div id="dark-mode-btn" className="hidden">
                        <DarkModeIcon sx={{ fontSize: 30, color: "inherit", padding: "6px" }} />
                    </div>
                </button>
                <SearchBar onSearch={onSearch} />

            </nav>
        </div>
    )
}