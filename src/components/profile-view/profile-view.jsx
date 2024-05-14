import { AccountUpdate } from "./account-update";
import { FavouriteMovies } from "./favourite-movies";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ user, movies }) => {
  const formData = {
    username: user.Username,
    email: user.Email,
    birthday: user.Birthday,
    password: user.Password
  };

  const handleUpdate = (e) => {
    switch (e.target.type) {
      case "text":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "date":
        setBirthdate(e.target.value);
      default:
    }
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://movies-myflix-api-84dbf8740f2d.herokuapp.com/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      // Assuming the response contains updated user data
      const updatedUserData = await response.json();
      setUser(updatedUserData);
      // Optionally, you can display a success message or reset the form here
    } catch (error) {
      console.error('Error updating user data:', error);
      // Optionally, you can display an error message here
    }
  };

  const favouriteMovieList = movies.filter(m => user.FavouriteMovies.includes(m._id));

  return (
    <>
      <Col md={6}>
        <AccountUpdate formData={formData} handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
      </Col>
      <FavouriteMovies favouriteMovieList={favouriteMovieList} />
    </>
  )
};