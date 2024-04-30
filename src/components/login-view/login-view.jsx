import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://movies-myflix-api-84dbf8740f2d.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        onLoggedIn(username);
      } else {
        alert("Login failed");
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="8" required /></label>
      <label>Password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
      <button type="Submit">Submit</button>
    </form>
  )
};