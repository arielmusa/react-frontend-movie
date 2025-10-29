import { NavLink } from "react-router";

export default function MovieCard(movie) {
  const { title, description, director, genre, id } = movie;
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
            <NavLink to={`/movies/${id}`} className="btn btn-primary">
              More info
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
