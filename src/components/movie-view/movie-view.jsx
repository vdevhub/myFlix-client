import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

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
        <p>Death: {movieData.Director.Death ? movieData.Director.Death : "N/A"}</p>
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
      <Button variant="primary" onClick={onBackClick}>Go Back</Button>
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
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}