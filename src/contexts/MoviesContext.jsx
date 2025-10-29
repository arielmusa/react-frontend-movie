import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Movies = createContext();

const apiUri = import.meta.env.VITE_API_URI;

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchMovies() {
    setIsLoading(true);
    return axios
      .get(`${apiUri}/api/movies`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err))
      .then(() => setIsLoading(false));
  }

  const storeReview = (review) => {
    return axios.post(`${apiUri}/api/reviews`, review);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const data = {
    movies,
    setMovies,
    storeReview,
    isLoading,
    setIsLoading,
    fetchMovies,
  };

  return <Movies.Provider value={data}>{children}</Movies.Provider>;
}

function useMovies() {
  return useContext(Movies);
}

export { MoviesProvider, useMovies };
