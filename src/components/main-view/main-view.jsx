import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      "Genre": {
        "Name": "Action",
        "Description": "Action films involve physical feats, chases, fights, and battles."
      },
      "Director": {
        "Name": "Stanley Kubrick",
        "Bio": "Stanley Kubrick was an American film director, screenwriter, and producer. He is considered one of the greatest and most influential directors in cinematic history. Kubrick's films are known for their technical precision, innovative use of music, and thought-provoking themes. Some of his most famous works include 2001: A Space Odyssey, A Clockwork Orange, and The Shining.",
        "Birth": "1928-07-26T00:00:00.000Z",
        "Death": "1999-03-07T00:00:00.000Z"
      },
      "Actors": [],
      "_id": "660cf4f4a8e808e3b590a916",
      "Title": "2001: A Space Odyssey",
      "Description": "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
      "ImagePath": "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png",
      "Featured": true
    },
    {
      "Genre": {
        "Name": "Action",
        "Description": "Action films involve physical feats, chases, fights, and battles."
      },
      "Director": {
        "Name": "Christopher Nolan",
        "Bio": "Christopher Edward Nolan is a British-American film director, producer, and screenwriter. He is known for his distinctive style of storytelling, often involving nonlinear narratives and exploring themes of memory, identity, and time. Nolan's films, such as Inception and The Dark Knight trilogy, have been both critically acclaimed and commercially successful.",
        "Birth": "1970-07-30T00:00:00.000Z",
        "Death": null
      },
      "Actors": [],
      "_id": "660cf026a8e808e3b590a90f",
      "Title": "The Dark Knight",
      "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "ImagePath": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      "Featured": false
    },
    {
      "Genre": {
        "Name": "Drama",
        "Description": "Drama films are intended to portray realistic characters, settings, life situations, and stories."
      },
      "Director": {
        "Name": "James Cameron",
        "Bio": "James Francis Cameron is a Canadian film director, producer, and screenwriter. He is known for his groundbreaking work in the science fiction genre, particularly with the films The Terminator, Aliens, and Avatar. Cameron's films are often characterized by their innovative special effects and immersive storytelling.",
        "Birth": "1954-08-16T00:00:00.000Z",
        "Death": null
      },
      "Actors": [],
      "_id": "660cf110a8e808e3b590a911",
      "Title": "The Shawshank Redemption",
      "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "ImagePath": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      "Featured": true
    },
    {
      "Genre": {
        "Name": "Adventure",
        "Description": "Adventure films typically involve characters embarking on a journey or quest, often featuring excitement, exploration, and risk-taking."
      },
      "Director": {
        "Name": "Steven Spielberg",
        "Bio": "Steven Allan Spielberg is an American film director, producer, and screenwriter. He is considered one of the founding pioneers of the New Hollywood era and one of the most popular directors and producers in film history. Spielberg's films have covered a wide range of genres, including adventure, science fiction, and historical dramas.",
        "Birth": "1946-12-18T00:00:00.000Z",
        "Death": null
      },
      "Actors": [],
      "_id": "660ced34a8e808e3b590a90c",
      "Title": "Jurassic Park",
      "Description": "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger.",
      "ImagePath": "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
      "Featured": true
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movieData={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>There is no movie to display!</div>;
  } else {
    return (
      <div>
        {movies.map((movie) => {
          return (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }} />
          );
        })}
      </div>
    );
  }
};