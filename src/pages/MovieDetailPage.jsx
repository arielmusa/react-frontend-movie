import { useParams } from "react-router";
import Hero from "../components/Hero";
import { useMovies } from "../contexts/MoviesContext";
import Review from "../components/Review";
import ModalFormReview from "../components/ModalFormReview";

export default function MovieDetailPage() {
  const { id } = useParams();
  const { movies, isLoading, setIsLoading } = useMovies();

  let movie = movies.find((movie) => movie.id == id);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Hero {...movie} />
            <div className="row g-3 py-5">
              <div className="col-12">
                <button
                  data-bs-target="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn btn-primary"
                >
                  Add review
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <ModalFormReview {...movie} />
                </div>
              </div>
              {movie?.reviews ? (
                movie.reviews?.map((review) => (
                  <Review key={review.id} {...review} />
                ))
              ) : (
                <p>No reviews</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
