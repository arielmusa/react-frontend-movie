import Hero from "../components/Hero";
import List from "../components/List";
import { useMovies } from "../contexts/MoviesContext";

export default function HomePage() {
  const { movies } = useMovies();
  let heroMovie = movies[0];

  return (
    <>
      <div className="container">
        <Hero {...heroMovie} />
        <List movies={movies} />
      </div>
    </>
  );
}
