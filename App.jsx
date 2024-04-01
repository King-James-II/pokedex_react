import React from "react"; // Import React library
import Pokedex from "./Pokedex.jsx"; // Import Pokedex component
import Search from "./Search.jsx"; // Import Search component
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import BrowserRouter, Routes, Route, and Link from react-router-dom library

import './index.css'; // Import CSS file

// Define the main App component
const App = (props) => {
 return (
   <BrowserRouter> {/* BrowserRouter wraps the entire app */}
    <div className="App"> {/* Main container */}
      <header>
        <h1>Pokedex</h1> {/* Page title */}
          <nav>
            <ul>
              <li><Link to="/">Pokedex</Link></li> {/* Link to the Pokedex page */}
              <li><Link to="/search">Search</Link></li> {/* Link to the Search page */}
            </ul>
          </nav>
      </header>
        <Routes> {/* Define routes for different pages */}
          <Route path="/" element={<Pokedex />} /> {/* Route to the Pokedex component */}
          <Route path="/search" element={<Search />} /> {/* Route to the Search component */}
        </Routes>
      </div>
    </BrowserRouter>
 );
}

export default App; // Export the App component
