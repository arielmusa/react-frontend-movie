import MovieCard from "./MovieCard";

export default function List({ movies }) {
  return (
    <>
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
