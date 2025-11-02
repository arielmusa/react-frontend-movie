import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function List({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [activeGenre, setActiveGenre] = useState("all");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres(Array.from(new Set(movies.map((movie) => movie.genre))));
  }, []);

  const filterMoviesByCat = (genre) => {
    setFilteredMovies(movies.filter((movie) => movie.genre == genre));
    setActiveGenre(genre);
  };

  return (
    <>
      <div className="row g-4 py-5">
        <div className="movie-categories">
          <span
            onClick={() => setFilteredMovies(movies)}
            className="badge text-bg-primary me-2"
          >
            All
          </span>
          {genres.map((genre) => (
            <span
              onClick={() => filterMoviesByCat(genre)}
              className="badge text-bg-primary me-2"
            >
              {genre}
            </span>
          ))}
        </div>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
