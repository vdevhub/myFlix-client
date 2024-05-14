import { AccountDetails } from "./account-details";
import { FavouriteMovies } from "./favourite-movies";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ user, movies, onAccountUpdate }) => {
  const favouriteMovieList = undefined ? [] : movies.filter(m => user.FavouriteMovies.includes(m._id));

  return (
    <>
      <Col md={6}>
        <h2>Account Information</h2>
        <AccountDetails user={user} onAccountUpdate={onAccountUpdate} />
      </Col>
      <Col>
        <FavouriteMovies favouriteMovieList={favouriteMovieList} />
      </Col>
    </>
  )
};