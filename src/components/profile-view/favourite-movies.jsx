import { MovieCard } from "../movie-card/movie-card";
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
            <Col className="mb-4" key={movie._id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movieData={movie} user={user} onFavouritesUpdate={onFavouritesUpdate} />
            </Col>
          )
        })}
      </Row>
    </>
  )
};