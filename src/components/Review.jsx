export default function Review(review) {
  return (
    <>
      <div className="col-6">
        <div className="text-bg-light p-4 rounded-3 h-100">
          <h2>{review.name}</h2>
          <p className="m-0">Vote: {review.vote}</p>
          <p className="py-2">{review.description}</p>
          <div className="d-flex gap-2"></div>
        </div>
      </div>
    </>
  );
}
