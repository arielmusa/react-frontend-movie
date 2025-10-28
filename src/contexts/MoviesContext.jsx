import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Movies = createContext();

const apiUri = import.meta.env.VITE_API_URI;

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios.get(`${apiUri}/api/movies`).then((res) => {
      setMovies(res.data);
    });
  }

  useEffect(() => fetchMovies, []);

  const data = { movies, setMovies };

  return <Movies.Provider value={data}>{children}</Movies.Provider>;
}

function useMovies() {
  return useContext(Movies);
}

export { MoviesProvider, useMovies };
