import { useEffect, useState } from "react";
import { useMovies } from "../contexts/MoviesContext";

const initialForm = {
  movie: { id: 0 },
  name: "",
  vote: 0,
  description: "",
};

export default function ModalFormReview(movie) {
  const [form, setForm] = useState(initialForm);
  const { storeReview, fetchMovies } = useMovies();

  useEffect(() => setForm({ ...form, movie: { id: movie.id } }), []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await storeReview(form);
      setForm(initialForm);
      fetchMovies();
    } catch (err) {
      console.error(err);
    }
  };
  console.log(form);

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add new review for {movie.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-6">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  id="name"
                  className="form-control"
                  type="text"
                  required
                />
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="vote">
                  vote
                </label>
                <input
                  name="vote"
                  value={form.vote}
                  onChange={handleChange}
                  id="vote"
                  className="form-control"
                  type="number"
                  min={1}
                  max={5}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="description">
                  Review:
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  id="description"
                  className="form-control"
                  type="text"
                  required
                />
              </div>
              <div className="col-12">
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
