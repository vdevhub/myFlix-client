export const MovieView = ({ movieData, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movieData.ImagePath} />
      </div>
      <div>
        <p>Title: {movieData.Title}</p>
      </div>
      <div>
        <p>Description: {movieData.Description}</p>
      </div>
      <div>
        <h2>Director</h2>
      </div>
      <div>
        <p>Name: {movieData.Director.Name}</p>
      </div>
      <div>
        <p>Bio: {movieData.Director.Bio}</p>
      </div>
      <div>
        <p>Birth: {movieData.Director.Birth}</p>
      </div>
      <div>
        <p>Death: {movieData.Director.Death}</p>
      </div>
      <div>
        <h2>Genre</h2>
      </div>
      <div>
        <p>Name: {movieData.Genre.Name}</p>
      </div>
      <div>
        <p>Description: {movieData.Genre.Description}</p>
      </div>
      <button onClick={onBackClick}>Go Back</button>
    </div>
  );
};

MovieView.propTypes = {
  movieData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,

    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.instanceOf(Date).isRequired,
      Death: PropTypes.instanceOf(Date)
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}