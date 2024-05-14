import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FavouriteMovies = ({ favouriteMovieList, user, onFavouritesUpdate }) => {
  return (
    <>
      <Row>
        <Col>
          <h2>Favourite Movies</h2>
        </Col>
      </Row>
      <Row>
        {favouriteMovieList.map((movie) => {
          return (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard movieData={movie} user={user} onFavouritesUpdate={onFavouritesUpdate} />
            </Col>
          )
        })}
      </Row>
    </>
  )
};