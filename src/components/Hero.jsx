export default function Hero(movie) {
  const { title, description, director, release_year, genre } = movie;
  return (
    <>
      <div className="hero row align-items-center py-5">
        <div>
          <h2 className="movie-title">{title}</h2>
          <p className="movie-description">{description}</p>
          <a href="#" className="btn btn-primary">
            Watch now
          </a>
          <div className="movie-info">
            <span className="rating pe-3">{director}</span>
            <span className="rating pe-3">{release_year}</span>
            <span className="rating pe-3">{genre}</span>
          </div>
        </div>
      </div>
    </>
  );
}
