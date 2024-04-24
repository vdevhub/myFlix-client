export const MovieView = ({ movieData }) => {
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
        <p>Director: {movieData.Director.Name}</p>
      </div>
      <div>
        <p>Actors: {movieData.Actors}</p>
      </div>
      <div>
        <p>Genre: {movieData.Genre.Name}</p>
      </div>
      <div>
        <p>Genre Description: {movieData.Genre.Description}</p>
      </div>
    </div>
  );
};