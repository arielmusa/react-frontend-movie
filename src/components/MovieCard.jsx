export default function MovieCard(movie) {
  const { title, description, director, genre } = movie;
  return (
    <>
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p>{genre}</p>
            <p>{director}</p>
          </div>
          <div>
            <a href="#" className="btn btn-primary">
              Watch now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
