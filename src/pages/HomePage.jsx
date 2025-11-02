import Hero from "../components/Hero";
import List from "../components/List";
import { useMovies } from "../contexts/MoviesContext";

export default function HomePage() {
  const { movies, isLoading } = useMovies();
  let heroMovie = movies[0];

  return (
    <>
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Hero {...heroMovie} />
            <List movies={movies} />
          </>
        )}
      </div>
    </>
  );
}
