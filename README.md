# myFlix Client
Client application for myFlix - an app for movie enthusiasts who enjoy reading information about different movies. It is based on its myFlix API (server-side REST API and database). The client is built using React.
## Features
- User is able to sign up (username, password, email, date of birth) and log in with a username and password
- User is able to log out and also deregister
- App returns all movies existing in the database to the user
- App displays a detailed view about a single movie upon clicking on the movie card
- It is possible to filter movies with a search feature (search looks through movie title, description, director name, genre name, and genre description to find a match)
- User is able to see their profile with their account information and favourite movies
- User can add a movie to their favourites list as well as remove it from the list
- User can update their account information
## Build Process with Parcel
Initiate build process with the following command using the specified file path:
```
parcel src/index.html
```